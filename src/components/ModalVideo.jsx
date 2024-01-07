export default function ModalVideo({ showModalVideo }) {
  return (
    <div
      className="fixed inset-0 border z-40 flex items-center justify-center min-h-screen"
      onClick={showModalVideo}
    >
      <div className="fixed inset-0 bg-black opacity-35" />
      <div className="bg-white p-0 md:p-6 z-10">
        <div className="w-[420px] pb-56 md:w-88 md:pb-56 relative z-50">
          {/* test */}
          <div className="absolute w-full h-full">
            <iframe
              title="modal-video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
