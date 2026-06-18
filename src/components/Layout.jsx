import TopNav from './TopNav';
import SideNav from './SideNav';
import Footer from './Footer';

export default function Layout({ children, currentView, setView, settings, onSettingsChange }) {
  return (
    <>
      <TopNav currentView={currentView} setView={setView} />
      <SideNav
        currentView={currentView}
        setView={setView}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <main className="ml-0 md:ml-20 flex flex-col items-center min-h-[calc(100vh-64px)] px-gutter py-stack-lg">
        {children}
      </main>
      <Footer />
    </>
  );
}
