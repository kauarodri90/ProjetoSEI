import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AlunoPage from './pages/AlunoPage';
import AlunoFormPage from './pages/AlunoFormPage';
import ReativarAlunosPage from './pages/ReativarAlunosPage';
import ProfessorPage from './pages/ProfessorPage';
import ProfessorFormPage from './pages/ProfessorFormPage';
import ReativarProfessoresPage from './pages/ReativarProfessoresPage';
import DisciplinaPage from './pages/DisciplinaPage';
import DisciplinaFormPage from './pages/DisciplinaFormPage';
import ReativarDisciplinasPage from './pages/ReativarDisciplinasPage';
import SalaPage from './pages/SalaPage';
import SalaFormPage from './pages/SalaFormPage';
import ReativarSalasPage from './pages/ReativarSalasPage';
import TurmaPage from './pages/TurmaPage';
import TurmaFormPage from './pages/TurmaFormPage';

const linkStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  textAlign: 'center',
  width: '240px'
};

const Home = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ marginBottom: '30px', fontSize: '2rem', color: '#fff' }}>SEI - Sistema Educacional Integrado</h1>
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link to="/alunos" style={linkStyle}>Gerenciar Alunos</Link>
      <Link to="/alunos/reativar" style={linkStyle}>Reativar Alunos</Link>
      <Link to="/professores" style={linkStyle}>Gerenciar Professores</Link>
      <Link to="/professores/reativar" style={linkStyle}>Reativar Professores</Link>
      <Link to="/disciplinas" style={linkStyle}>Gerenciar Disciplinas</Link>
      <Link to="/disciplinas/reativar" style={linkStyle}>Reativar Disciplinas</Link>
      <Link to="/salas" style={linkStyle}>Gerenciar Salas</Link>
      <Link to="/salas/reativar" style={linkStyle}>Reativar Salas</Link>
      <Link to="/turmas" style={linkStyle}>Gerenciar Turmas</Link>
    </nav>
  </div>
);

const PageContainer = ({ children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1e1e1e',
  }}>
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      minWidth: '900px',
      textAlign: 'center',
      margin: '0 auto',
    }}>
      {children}
    </div>

    <div style={{ marginTop: '40px' }}>
      <Link to="/" style={{ ...linkStyle }}>🏠 Voltar para o Início</Link>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alunos" element={<PageContainer><AlunoPage /></PageContainer>} />
      <Route path="/alunos/novo" element={<PageContainer><AlunoFormPage /></PageContainer>} />
      <Route path="/alunos/editar/:id" element={<PageContainer><AlunoFormPage /></PageContainer>} />
      <Route path="/alunos/reativar" element={<PageContainer><ReativarAlunosPage /></PageContainer>} />
      <Route path="/professores" element={<PageContainer><ProfessorPage /></PageContainer>} />
      <Route path="/professores/novo" element={<PageContainer><ProfessorFormPage /></PageContainer>} />
      <Route path="/professores/editar/:id" element={<PageContainer><ProfessorFormPage /></PageContainer>} />
      <Route path="/professores/reativar" element={<PageContainer><ReativarProfessoresPage /></PageContainer>} />
      <Route path="/disciplinas" element={<PageContainer><DisciplinaPage /></PageContainer>} />
      <Route path="/disciplinas/novo" element={<PageContainer><DisciplinaFormPage /></PageContainer>} />
      <Route path="/disciplinas/editar/:id" element={<PageContainer><DisciplinaFormPage /></PageContainer>} />
      <Route path="/disciplinas/reativar" element={<PageContainer><ReativarDisciplinasPage /></PageContainer>} />
      <Route path="/salas" element={<PageContainer><SalaPage /></PageContainer>} />
      <Route path="/salas/novo" element={<PageContainer><SalaFormPage /></PageContainer>} />
      <Route path="/salas/editar/:id" element={<PageContainer><SalaFormPage /></PageContainer>} />
      <Route path="/salas/reativar" element={<PageContainer><ReativarSalasPage /></PageContainer>} />
      <Route path="/turmas" element={<PageContainer><TurmaPage /></PageContainer>} />
      <Route path="/turmas/novo" element={<PageContainer><TurmaFormPage /></PageContainer>} />
      <Route path="/turmas/editar/:id" element={<PageContainer><TurmaFormPage /></PageContainer>} />
    </Routes>
  </Router>
);

export default App;
