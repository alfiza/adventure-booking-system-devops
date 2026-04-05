// Initialize database, user, and optional seed data
db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE || "booking_system");

// Create application user with readWrite on booking_system
db.createUser({
  user: "appuser",
  pwd: "apppassword",
  roles: [{ role: "readWrite", db: db.getName() }],
});

// Minimal seed collections to ensure DB exists
db.createCollection("users");
db.createCollection("bookings");
db.users.createIndex({ email: 1 }, { unique: true });
