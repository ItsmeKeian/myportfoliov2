export default function Projects() {
  return (
    <section className="border rounded-xl p-6 bg-white dark:bg-slate-900 dark:border-slate-800">
      <h2 className="font-semibold mb-4">Recent Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium">DTR Web App</h3>
          <p className="text-xs text-gray-500">
            Attendance & Time Tracking System
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-medium">Food Ordering System</h3>
          <p className="text-xs text-gray-500">
            Cart & Order Management
          </p>
        </div>
      </div>
    </section>
  );
}
