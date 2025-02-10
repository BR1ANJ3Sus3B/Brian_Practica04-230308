import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Brian:2425@cluster0.iypvp.mongodb.net/BDMArco');
    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error al conectar a MongoDB:', err.message);
    process.exit(1); // Detener ejecución en caso de error
  }
};

export default connectDB;
