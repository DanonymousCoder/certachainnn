import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Ready to secure your future?
        </h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          Join thousands of students and institutions moving education to the global ledger. 
          Your credentials, your ownership, forever.
        </p>

        <div className="flex gap-4 justify-center flex-col sm:flex-row pt-4">
          <Button to="/verifier" className='bg-indigo-600'>
            Get Started Now
          </Button>
          <Button
            to="/home"
            variant="ghost"
            className="text-white border-2 border-gray-600 hover:bg-gray-800"
          >
            View Demo Registry
          </Button>
        </div>
      </div>
    </section>
  );
}
