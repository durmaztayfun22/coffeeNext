import React from "react";
import '../../styles/VideoPlayer.css'; // VideoPlayer bileşeninin stillerini içe aktarır

export default function VideoPlayer() {
  return (
    <div className="video-container"> {/* Video'nun içerisinde bulunduğu konteyner */}
      <iframe
        title="YouTube Video" // iframe'in başlığı
        src="https://www.youtube.com/embed/vQVTNscQY0c" // YouTube video URL'si
        frameBorder="0" // iframe sınırlarını kaldırır
        allowFullScreen // Tam ekran izin verir
        className="video-player" // iframe'e uygulanacak CSS sınıfı
      ></iframe>
    </div>
  );
}
