import './footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Intelligent IoT Data Management</p>
      <nav>
        <a href="/privacy">Privacy</a> • <a href="/terms">Terms</a>
      </nav>
    </footer>
  );
}
