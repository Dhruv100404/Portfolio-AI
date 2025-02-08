export default function Contact() {
  return (
    <section id="contact" className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-800 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-800 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 bg-gray-800 rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors">
          Send Message
        </button>
      </form>
    </section>
  )
}

