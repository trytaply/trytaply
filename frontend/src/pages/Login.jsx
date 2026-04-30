import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      nav('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Fehler');
    }
  }

  return (
    <div style={{ minHeight:'100vh', background:'#06090F',
                  display:'flex', alignItems:'center', justifyContent:'center' }}>
      <form onSubmit={handleLogin} style={{ background:'#0D1520', padding:32,
             borderRadius:20, border:'1px solid rgba(255,255,255,.07)', width:380 }}>
        <h2 style={{ color:'#fff', marginBottom:24 }}>Login</h2>
        <input type='email' placeholder='E-Mail' value={email}
          onChange={function(e){setEmail(e.target.value);}}
          style={{ width:'100%', marginBottom:12, padding:'10px 12px',
                   background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)',
                   borderRadius:8, color:'#fff', fontSize:14 }} />
        <input type='password' placeholder='Passwort' value={password}
          onChange={function(e){setPassword(e.target.value);}}
          style={{ width:'100%', marginBottom:16, padding:'10px 12px',
                   background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)',
                   borderRadius:8, color:'#fff', fontSize:14 }} />
        {error && <p style={{ color:'#f87171', marginBottom:12 }}>{error}</p>}
        <button type='submit'
          style={{ width:'100%', padding:12, background:'linear-gradient(135deg,#0A84FF,#32D6FF)',
                   border:'none', borderRadius:10, color:'#fff', fontWeight:800, cursor:'pointer', fontSize:15 }}>
          Einloggen →
        </button>
        <p style={{ color:'rgba(255,255,255,.4)', fontSize:13, marginTop:16, textAlign:'center' }}>
          Noch kein Account?{' '}
          <a href='/register' style={{ color:'#32D6FF' }}>Registrieren</a>
        </p>
      </form>
    </div>
  );
}
