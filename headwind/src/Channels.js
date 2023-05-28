import { AiOutlinePlus } from "react-icons/ai";

const Channels = () => {
  return (
    <div className="ml-16 p-5 flex flex-col h-screen bg-gray-800 gap-3 w-56">
      <h2 className="font-bold text-xl text-white mb-4">Channels</h2>
      <ChannelTopics icon={<AiOutlinePlus size="16" color="gray" />} />
      <ChannelQuestions icon={<AiOutlinePlus size="16" color="gray" />} />
      <ChannelRandom icon={<AiOutlinePlus size="16" color="gray" />} />
    </div>
  );
};

const ChannelTopics = ({ icon }) => {
  return (
    <div className="channel-category">
      <details className="" open>
        <summary className="category-title">Topics {icon}</summary>
        <p className="category-link">
          <ChannelIcon /> tailwind-css
        </p>
        <p className="category-link">
          <ChannelIcon /> react
        </p>
      </details>
    </div>
  );
};

const ChannelQuestions = ({ icon }) => {
  return (
    <div className="channel-category">
      <details className="" open>
        <summary className="category-title">Questions {icon}</summary>
        <p className="category-link">
          <ChannelIcon /> jit-compilation
        </p>
        <p className="category-link">
          <ChannelIcon /> purge-files
        </p>
        <p className="category-link">
          <ChannelIcon /> dark-mode
        </p>
      </details>
    </div>
  );
};

const ChannelRandom = ({ icon }) => {
  return (
    <div className="channel-category">
      <details className="" open>
        <summary className="category-title">Random {icon}</summary>
        <p className="category-link">
          <ChannelIcon /> variants
        </p>
        <p className="category-link">
          <ChannelIcon /> plugins
        </p>
      </details>
    </div>
  );
};

const ChannelIcon = () => {
  return <span className="text-2xl text-white font-light">#</span>;
};

export default Channels;
