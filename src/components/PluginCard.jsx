
const PluginCard = ({ pluginName, data }) => {
  return (
    <div className="max-w-sm p-4 border border-gray-300 rounded-xl shadow bg-white">
      <h3 className="font-bold text-lg text-blue-700 capitalize mb-2">{pluginName} Result</h3>
      <div className="text-sm text-gray-700">
        {pluginName === 'weather' && (
          <p>{data.city}: <span className="font-semibold">{data.temperature}</span></p>
        )}
        {pluginName === 'calc' && (
          <p>Result: <span className="font-semibold">{data.result}</span></p>
        )}
        {pluginName === 'define' && (
          <>
            <p className="font-semibold text-gray-900 mb-1">{data.word}</p>
            <ul className="list-disc list-inside space-y-1">
              {data.definitions.map((def, index) => (
                <li key={index}>{def}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default PluginCard;