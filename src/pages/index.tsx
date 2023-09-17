import Layout from '../components/Layout';
import MessageForm from 'components/MessageForm';
import MessagesList from 'components/MessageList';
import MessageForm2 from 'components/MessageForm2';
import MessagesList2 from 'components/MessageList2';
import { NextPage } from 'next';
import { MessagesProvider, MessageProviderSecondBot } from 'utils/useMessages';

const IndexPage: NextPage = () => {

  return (
    <div className="flex">
      {/* Right Column (MessagesList2 for the second bot) */}
      <div className="flex-1">
        <MessageProviderSecondBot>
          <Layout>
            <MessagesList2 />
            <div className="fixed bottom-0 left-0">
              <MessageForm2 />
            </div>
          </Layout>
        </MessageProviderSecondBot>
      </div>

      {/* Left Column (MessagesList for the first bot) */}
      <div className="flex-1">
        <MessagesProvider>
          <Layout>
            <MessagesList />
            <div className="fixed bottom-0 right-0">
              <MessageForm />
            </div>
          </Layout>
        </MessagesProvider>
      </div>
    </div>
  );
};

export default IndexPage;




