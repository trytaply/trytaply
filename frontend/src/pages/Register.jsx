import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

export default function Register() {
  const [form, setForm] = useState({ email: '', password: '', restaurantName: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post('/auth/register', form);
      localStorage.setItem('token', res.data.token);
      nav('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Fehler beim Registrieren');
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight:'100vh', background:'#06090F',
                  display:'flex', alignItems:'center', justifyContent:'center' }}>
      <form onSubmit={handleSubmit} style={{ background:'#0D1520', padding:32,
             borderRadius:20, border:'1px solid rgba(255,255,255,.07)', width:380 }}>
        <h2 style={{ color:'#fff', marginBottom:24 }}>Account erstellen</h2>
        {['restaurantName','email','password'].map(function(field) {
          return (
            <input key={field}
              type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
              placeholder={field === 'restaurantName' ? 'Restaurant Name' : field === 'email' ? 'E-Mail' : 'Passwort'}
              value={form[field]}
              onChange={function(e) { setForm(function(f) { var n = Object.assign({}, f); n[field] = e.target.value; return n; }); }}
              style={{ width:'100%', marginBottom:12, padding:'10px 12px',
                       background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)',
                       borderRadius:8, color:'#fff', fontSize:14 }}
            />
          );
        })}
        {error && <p style={{ color:'#f87171', marginBottom:12 }}>{error}</p>}
        <button type='submit' disabled={loading}
          style={{ width:'100%', padding:12, background:'linear-gradient(135deg,#0A84FF,#32D6FF)',
                   border:'none', borderRadius:10, color:'#fff', fontWeight:800, cursor:'pointer', fontSize:15 }}>
          {loading ? 'Wird erstellt...' : 'Account erstellen →'}
        </button>
      </form>
    </div>
  );
}
