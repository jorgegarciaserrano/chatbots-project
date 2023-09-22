import { useState } from 'react'
import Layout from '../components/Layout'
import MessageForm from 'components/MessageForm'
import MessagesList from 'components/MessageList'
import MessageForm2 from 'components/MessageForm2'
import MessagesList2 from 'components/MessageList2'
import MessagesList3 from 'components/MessageList3'
import MessageForm3 from 'components/MessageForm3'
import MessagesList4 from 'components/MessageList4'
import MessageForm4 from 'components/MessageForm4'

import { NextPage } from 'next'
import {
  MessagesProvider,
  MessageProviderSecondBot,
  MessageProviderThirdBot,
  MessageProviderFourthBot
} from 'utils/useMessages'

// Agrega estilos personalizados para Raleway
const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  fontFamily: 'Raleway, sans-serif',
  margin: '0.5rem'
}

const IndexPage: NextPage = () => {
  const [isEmailBotOpen, setIsEmailBotOpen] = useState(false)
  const [isSummarizingBotOpen, setIsSummarizingBotOpen] = useState(false)
  const [isPostBotOpen, setIsPostBotOpen] = useState(false)
  const [isProdBotOpen, setIsProdBotOpen] = useState(false)

  const openEmailBot = () => {
    setIsEmailBotOpen(true)
  }

  const closeEmailBot = () => {
    setIsEmailBotOpen(false)
  }

  const openSummarizingBot = () => {
    setIsSummarizingBotOpen(true)
  }

  const closeSummarizingBot = () => {
    setIsSummarizingBotOpen(false)
  }

  const openPostBot = () => {
    setIsPostBotOpen(true)
  }

  const closePostBot = () => {
    setIsPostBotOpen(false)
  }

  const openProdBot = () => {
    setIsProdBotOpen(true)
  }

  const closeProdBot = () => {
    setIsProdBotOpen(false)
  }

  return (
    <div className="flex">
      {/* Email Bot Popup */}
      {isEmailBotOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-3/4">
            <h2 className="text-lg font-semibold p-4">EMAIL BOT</h2>
            <MessageProviderSecondBot>
              <MessagesList2 />
              <div className="p-4">
                <MessageForm2 />
              </div>
            </MessageProviderSecondBot>
            <button
              style={buttonStyle} // Aplica el estilo personalizado
              className="block text-center w-full py-2 text-sm hover:bg-gray-300 focus:outline-none"
              onClick={closeEmailBot}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Summarizing Bot Popup */}
      {isSummarizingBotOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-3/4">
            <h2 className="text-lg font-semibold p-4">SUMMARIZING BOT</h2>
            <MessagesProvider>
              <MessagesList />
              <div className="p-4">
                <MessageForm />
              </div>
            </MessagesProvider>
            <button
              style={buttonStyle} // Aplica el estilo personalizado
              className="block text-center w-full py-2 text-sm hover:bg-gray-300 focus:outline-none"
              onClick={closeSummarizingBot}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Post Bot Popup */}
      {isPostBotOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-3/4">
            <h2 className="text-lg font-semibold p-4">POST BOT</h2>
            <MessageProviderThirdBot>
              <MessagesList3 />
              <div className="p-4">
                <MessageForm3 />
              </div>
            </MessageProviderThirdBot>
            <button
              style={buttonStyle} // Aplica el estilo personalizado
              className="block text-center w-full py-2 text-sm hover:bg-gray-300 focus:outline-none"
              onClick={closePostBot}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Summarizing Bot Popup */}
      {isProdBotOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-3/4">
            <h2 className="text-lg font-semibold p-4">PRODUCTIVITY BOT</h2>
            <MessageProviderFourthBot>
              <MessagesList4 />
              <div className="p-4">
                <MessageForm4 />
              </div>
            </MessageProviderFourthBot>
            <button
              style={buttonStyle} // Aplica el estilo personalizado
              className="block text-center w-full py-2 text-sm hover:bg-gray-300 focus:outline-none"
              onClick={closeProdBot}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Buttons to Toggle Popups */}
      <div className="flex-1 bg-gray-100 p-4">
        <Layout>
          <div className="bg-white p-4 rounded-lg shadow">
            <button
              style={buttonStyle} // Aplica el estilo personalizado
              className="text-lg font-semibold mb-4 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
              onClick={openEmailBot}
            >
              Open Email Bot
            </button>
            <button
              style={buttonStyle} // Aplica el estilo personalizado
              className="text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
              onClick={openSummarizingBot}
            >
              Open Summarizing Bot
            </button>
            <button
              style={buttonStyle} // Aplica el estilo personalizado
              className="text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
              onClick={openPostBot}
            >
              Open Post Bot
            </button>
            <button
              style={buttonStyle} // Aplica el estilo personalizado
              className="text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
              onClick={openProdBot}
            >
              Open Productivity Bot
            </button>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default IndexPage
