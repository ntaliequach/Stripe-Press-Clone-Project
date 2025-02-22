import { Card } from "@/components/ui/card";

export default function Publications() {
  return (
    <div className="p-10 min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center">Stripe Press</h1>
        <p className="text-center text-lg mt-2">Books for people who are intellectually curious and want to learn more about the world.</p>
      </header>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-white shadow-lg">
            <img src="/path/to/book1.jpg" alt="Book 1" className="w-full h-64 object-cover mb-4"/>
            <h2 className="text-xl font-semibold mb-2">Book 1</h2>
            <p className="text-gray-700">Description of Book 1.</p>
          </Card>
          <Card className="p-6 bg-white shadow-lg">
            <img src="/path/to/book2.jpg" alt="Book 2" className="w-full h-64 object-cover mb-4"/>
            <h2 className="text-xl font-semibold mb-2">Book 2</h2>
            <p className="text-gray-700">Description of Book 2.</p>
          </Card>
          <Card className="p-6 bg-white shadow-lg">
            <img src="/path/to/book3.jpg" alt="Book 3" className="w-full h-64 object-cover mb-4"/>
            <h2 className="text-xl font-semibold mb-2">Book 3</h2>
            <p className="text-gray-700">Description of Book 3.</p>
          </Card>
          {/* Add more cards as needed */}
        </section>
      </main>
    </div>
  );
}