import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Keian’s AI assistant. Ask me anything about his experience, skills, or projects."
    }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { sender: "user", text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/portfolioApi/chat.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })

      const data = await res.json()

      const aiReply =
        data?.choices?.[0]?.message?.content ||
        "Sorry, something went wrong."

      setMessages((prev) => [...prev, { sender: "ai", text: aiReply }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error connecting to AI service." }
      ])
    }

    setLoading(false)
  }

  return (
    <>
     
      {/* Floating Button with Label */}
            {!open && (
            <div
                className="flex fixed right-6 bottom-6 z-50 gap-3 items-center"
            >
                <div className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-full shadow-lg dark:bg-purple-600 dark:text-white">
                Ask questions
                </div>

                <button
                onClick={() => setOpen(true)}
                className="flex justify-center items-center w-12 h-12 bg-purple-600 rounded-full shadow-xl transition hover:scale-105"
                >
                <MessageCircle className="text-white" size={20} />
                </button>
            </div>
            )}

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 w-80 h-[480px] rounded-2xl shadow-2xl 
                     backdrop-blur-xl border border-white/10 
                     bg-white/80 dark:bg-slate-900/95 
                     flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-slate-700">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Keian AI</h4>
              <p className="text-xs text-gray-900 dark:text-gray-400">
                Portfolio Assistant
              </p>
            </div>
            <button className="text-gray-500 dark:text-gray-200" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="overflow-y-auto flex-1 p-3 space-y-3 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[75%] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 text-xs text-gray-500 bg-gray-200 rounded-2xl animate-pulse dark:bg-slate-800">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 border-t border-gray-200 dark:border-slate-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about Keian..."
              className="flex-1 px-3 py-2 text-sm bg-gray-100 rounded-xl border border-gray-300 dark:bg-slate-800 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={sendMessage}
              className="flex justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl transition hover:scale-105"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}