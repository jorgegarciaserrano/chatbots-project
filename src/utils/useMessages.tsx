import { useToast } from '@apideck/components'
import { ChatCompletionRequestMessage } from 'openai'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { sendMessage } from './sendMessage'

interface ContextProps {
  messages: ChatCompletionRequestMessage[]
  addMessage: (content: string) => Promise<void>
  isLoadingAnswer: boolean
}

// Define un nuevo contexto para el segundo chatbot
interface ContextPropsSecondBot {
  messages: ChatCompletionRequestMessage[]
  addMessage2: (content: string) => Promise<void>
  isLoadingAnswer: boolean
}

interface ContextPropsThirdBot {
  messages: ChatCompletionRequestMessage[]
  addMessage3: (content: string) => Promise<void>
  isLoadingAnswer: boolean
}

interface ContextPropsFourthBot {
  messages: ChatCompletionRequestMessage[]
  addMessage4: (content: string) => Promise<void>
  isLoadingAnswer: boolean
}

const ChatsContext = createContext<Partial<ContextProps>>({})

const ChatsContextSecondBot = createContext<Partial<ContextPropsSecondBot>>({})

const ChatsContextThirdBot = createContext<Partial<ContextPropsThirdBot>>({})

const ChatsContextFourthBot = createContext<Partial<ContextPropsFourthBot>>({})

export function MessagesProvider({ children }: { children: ReactNode }) {
  const { addToast } = useToast()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content: 'Summarize the following text into a five-line, short parragraph'
      }
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'Introduce the text you want to summarize'
      }
      setMessages([systemMessage, welcomeMessage])
    }

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat()
    }
  }, [messages?.length, setMessages])

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true)
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const { data } = await sendMessage(newMessages)
      const reply = data.choices[0].message

      // Add the assistant message to the state
      setMessages([...newMessages, reply])
    } catch (error) {
      // Show error when something goes wrong
      addToast({ title: 'An error occurred', type: 'error' })
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  )
}

export function MessageProviderSecondBot({ children }: { children: ReactNode }) {
  const { addToast } = useToast()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content: 'Write an email with the following keywords.'
      }
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'Write your email'
      }
      setMessages([systemMessage, welcomeMessage])
    }

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat()
    }
  }, [messages?.length, setMessages])

  const addMessage2 = async (content: string) => {
    setIsLoadingAnswer(true)
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const { data } = await sendMessage(newMessages)
      const reply = data.choices[0].message

      // Add the assistant message to the state
      setMessages([...newMessages, reply])
    } catch (error) {
      // Show error when something goes wrong
      addToast({ title: 'An error occurred', type: 'error' })
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  return (
    <ChatsContextSecondBot.Provider value={{ messages, addMessage2, isLoadingAnswer }}>
      {children}
    </ChatsContextSecondBot.Provider>
  )
}

export function MessageProviderThirdBot({ children }: { children: ReactNode }) {
  const { addToast } = useToast()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content: 'Generate a linkedin post based on the information provided'
      }
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'Give me the information, and I will generate a linkedin post'
      }
      setMessages([systemMessage, welcomeMessage])
    }

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat()
    }
  }, [messages?.length, setMessages])

  const addMessage3 = async (content: string) => {
    setIsLoadingAnswer(true)
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const { data } = await sendMessage(newMessages)
      const reply = data.choices[0].message

      // Add the assistant message to the state
      setMessages([...newMessages, reply])
    } catch (error) {
      // Show error when something goes wrong
      addToast({ title: 'An error occurred', type: 'error' })
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  return (
    <ChatsContextThirdBot.Provider value={{ messages, addMessage3, isLoadingAnswer }}>
      {children}
    </ChatsContextThirdBot.Provider>
  )
}

export function MessageProviderFourthBot({ children }: { children: ReactNode }) {
  const { addToast } = useToast()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content:
          'Define the steps of the creation process of the following product/service. I want the description to be as detailed as possible, giving informationn of the action plan too.'
      }
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'What do you want to develop?'
      }
      setMessages([systemMessage, welcomeMessage])
    }

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat()
    }
  }, [messages?.length, setMessages])

  const addMessage4 = async (content: string) => {
    setIsLoadingAnswer(true)
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const { data } = await sendMessage(newMessages)
      const reply = data.choices[0].message

      // Add the assistant message to the state
      setMessages([...newMessages, reply])
    } catch (error) {
      // Show error when something goes wrong
      addToast({ title: 'An error occurred', type: 'error' })
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  return (
    <ChatsContextFourthBot.Provider value={{ messages, addMessage4, isLoadingAnswer }}>
      {children}
    </ChatsContextFourthBot.Provider>
  )
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps
}

export const useMessagesSecondBot = () => {
  return useContext(ChatsContextSecondBot) as ContextPropsSecondBot
}

export const useMessagesThirdBot = () => {
  return useContext(ChatsContextThirdBot) as ContextPropsThirdBot
}

export const useMessagesFourthBot = () => {
  return useContext(ChatsContextFourthBot) as ContextPropsFourthBot
}
