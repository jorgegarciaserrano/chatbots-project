import { NextPage } from 'next'
import { MessageProviderSecondBot } from 'utils/useMessages'
import Layout from 'components/Layout'
import MessageForm2 from 'components/MessageForm2'
import MessagesList2 from 'components/MessageList2'

const IndexPage: NextPage = () => {
  return (

      <MessageProviderSecondBot>
      <Layout>
        <div className="flex">
          <div className='flex-1'>
          <div className="w-1/2 float-left">
            <MessagesList2 />
            </div>
          </div>
          <div className="fixed bottom-0 left-0">
            <MessageForm2 />
          </div>
        </div>
      </Layout>
      </MessageProviderSecondBot>

    
  )
}

export default IndexPage