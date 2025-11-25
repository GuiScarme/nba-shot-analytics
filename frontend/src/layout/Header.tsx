import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: "#1D428A", 
      color: "white", 
      padding: "1.5rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="Home">
        <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>🏀 CourtIQ</h1>
      </NavLink>
      <nav style={{ display: "flex", gap: "1.25rem" , fontSize: "1rem", fontWeight: "600"}}>
        <NavLink to="/players" style={({isActive}) => ({ color: isActive ? '#F5F6FA' : '#fff', textDecoration: 'none' })}>Players</NavLink>
        <NavLink to="/teams" style={({isActive}) => ({ color: isActive ? '#F5F6FA' : '#fff', textDecoration: 'none' })}>Teams</NavLink>
      </nav>
    </header>
  );
}