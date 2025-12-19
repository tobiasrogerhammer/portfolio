import mongoose from 'mongoose';

/**
 * Boat Model Schema
 * 
 * Note: This model uses Norwegian field names (Adresse, Postnummer, Poststed, Båtplass)
 * to match Norwegian address conventions and user expectations.
 * - Adresse: Address
 * - Postnummer: Postal code
 * - Poststed: Postal city/location
 * - Båtplass: Boat spot/berth number
 */
const BoatSchema = new mongoose.Schema({
  Adresse: {
    type: String,
    required: false,
  },
  Postnummer: {
    type: Number,
    required: false,
  },
  Poststed: {
    type: String,
    required: false,
  },
  Båtplass: {
    type: Number,
    required: false,
  },
  startUse: {
    type: Date,
    required: false,
  },
  endUse: {
    type: Date,
    required: false,
  },
  mailadress: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Boat || mongoose.model('Boat', BoatSchema);

