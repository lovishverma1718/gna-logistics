import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SmoothScroll } from './components/SmoothScroll';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { PageLayout } from './components/PageLayout';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const AnimatedRoutes: React.FC<{ onOpenQuote: () => void }> = ({ onOpenQuote }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageLayout>
              <Home onOpenQuote={onOpenQuote} />
            </PageLayout>
          }
        />
        <Route
          path="/services"
          element={
            <PageLayout>
              <Services onOpenQuote={onOpenQuote} />
            </PageLayout>
          }
        />
        <Route
          path="/industries"
          element={
            <PageLayout>
              <Industries onOpenQuote={onOpenQuote} />
            </PageLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PageLayout>
              <About onOpenQuote={onOpenQuote} />
            </PageLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PageLayout>
              <Contact />
            </PageLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <HashRouter>
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}
      <SmoothScroll>
        <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-brand-orange selection:text-white">
          <Navigation onOpenQuote={handleOpenQuote} />
          
          <main className="flex-grow">
            <AnimatedRoutes onOpenQuote={handleOpenQuote} />
          </main>

          <Footer onOpenQuote={handleOpenQuote} />
          <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
        </div>
      </SmoothScroll>
    </HashRouter>
  );
};

export default App;
