import { auth } from "@/auth";

const TripsPage = async () => {
  const session = await auth();
  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl text-gray-700">
          Please sign in to view your trips.
        </h1>
      </div>
    );
  }
  return (
    <div className="space-y-6 container mx-auto px-4 py-8">
      <div className="">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default TripsPage;
