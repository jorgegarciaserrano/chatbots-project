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
      <div className="flex-1 bg-gray-100 p-4">
        <MessageProviderSecondBot>
          <Layout>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">EMAIL BOT</h2>
              <MessagesList2 />
              <div className="mt-4">
                <MessageForm2 />
              </div>
            </div>
          </Layout>
        </MessageProviderSecondBot>
      </div>

      {/* Left Column (MessagesList for the first bot) */}
      <div className="flex-1 bg-gray-100 p-4">
        <MessagesProvider>
          <Layout>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">PROTOTYPING BOT</h2>
              <MessagesList />
              <div className="mt-4">
                <MessageForm />
              </div>
            </div>
          </Layout>
        </MessagesProvider>
      </div>
    </div>
  );
};

export default IndexPage;





