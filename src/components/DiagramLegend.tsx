const DiagramLegend: React.FC<any> = ({ payload }) => {
  if (!payload) return null;

  return (
    <div className='mt-5'>
      {payload.map((entry: any, index: number) => (
        <div key={index} className='flex justify-between px-4'>
          <div className="flex items-center mx-2 mb-2">
            <div
              className="w-4 h-4 mr-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-app-sm text-grey-1 font-medium mr-2">{entry.value}</span>
          </div>

          <div>
            <span className='mr-3 text-grey-5 text-app-sm'>
              {entry.payload.value}
            </span>
            <span className='text-grey-1 text-app-sm font-semibold'>
              {Math.round(entry.payload.percent * 100)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiagramLegend;
