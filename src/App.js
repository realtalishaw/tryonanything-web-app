import React, { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { UploadImages } from './Components/UploadImages';
import { Loading } from './Components/Loading'
import EmailModal from './Components/EmailModal';
import Results from './Components/Results';

function App() {
  const [resultImageUrl, setResultImageUrl] = useState('');
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="p-6  ">
      <UploadImages />
      <Loading />
      <EmailModal />
      <Results resultImageUrl='https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1216159/retina_500x200_Untitled-ff82fb85c7fe5e6f7c06c94923e6b98b.png' />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
