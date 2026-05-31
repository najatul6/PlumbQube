const DocumentCard = ({ doc }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 hover:border-primary-200 hover:shadow-lg transition duration-300">
      <div className="text-primary-200 text-2xl mb-5">
        {doc.icon}
      </div>

      <h3 className="font-semibold text-lg">
        {doc.title}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {doc.description}
      </p>
    </div>
  );
};

export default DocumentCard;