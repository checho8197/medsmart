import { motion } from "framer-motion";

export default function Landing({ onStart }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        backgroundImage: "url('/medicina-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro para que resalte el texto */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.45)",
          zIndex: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Título */}
      <motion.h1
        style={{
          zIndex: 1,
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          textShadow: "0 0 12px rgba(0,0,0,0.8)",
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        MedSmart
      </motion.h1>

      {/* Mensaje llamativo debajo del título */}
      <motion.p
        style={{
          zIndex: 1,
          fontSize: "1.25rem",
          fontWeight: "500",
          marginBottom: "2rem",
          textShadow: "0 0 8px rgba(0,0,0,0.7)",
          fontStyle: "italic",
          letterSpacing: "0.05em",
        }}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
      >
        La IA que te ayuda a estudiar medicina de forma inteligente
      </motion.p>

      {/* Botón Comenzar con animación suave y elegante */}
      <motion.button
        onClick={onStart}
        style={{
          zIndex: 1,
          padding: "1rem 3rem",
          borderRadius: "9999px",
          backgroundColor: "white",
          color: "#1e3a8a",
          fontWeight: "600",
          fontSize: "1.3rem",
          cursor: "pointer",
          boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
          border: "none",
          outline: "none",
          userSelect: "none",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.08, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
      >
        Comenzar
      </motion.button>
    </div>
  );
}
