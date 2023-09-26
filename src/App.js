import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { UploadImages } from './Components/UploadImages';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="p-6 h-[calc(100vh-375px)] ">
      <UploadImages />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
