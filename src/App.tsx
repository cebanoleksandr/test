import Diagram from "./components/Diagram";
import { getCountriesData } from "./utils/data-configs";
import { CountryUsageData } from "./utils/types";

const countries: CountryUsageData[] = [
  { country: 'UA', percentage: 43, number: 56 },
  { country: 'PL', percentage: 43, number: 34 },
  { country: 'US', percentage: 43, number: 21 },
  { country: 'AF', percentage: 43, number: 56 },
  { country: 'AX', percentage: 43, number: 34 },
  { country: 'AL', percentage: 43, number: 21 },
  { country: 'DZ', percentage: 43, number: 56 },
  { country: 'AD', percentage: 43, number: 34 },
  { country: 'AI', percentage: 43, number: 21 },
  { country: 'AQ', percentage: 43, number: 56 },
  { country: 'AG', percentage: 43, number: 34 },
  { country: 'AR', percentage: 43, number: 21 },
  { country: 'AM', percentage: 43, number: 56 },
  { country: 'AU', percentage: 43, number: 34 },
  { country: 'AZ', percentage: 43, number: 21 },
  { country: 'UA', percentage: 43, number: 56 },
  { country: 'PL', percentage: 43, number: 34 },
  { country: 'US', percentage: 43, number: 21 },
  { country: 'AF', percentage: 43, number: 56 },
  { country: 'AX', percentage: 43, number: 34 },
  { country: 'AL', percentage: 43, number: 21 },
  { country: 'DZ', percentage: 43, number: 56 },
  { country: 'AD', percentage: 43, number: 34 },
  { country: 'AI', percentage: 43, number: 21 },
  { country: 'AQ', percentage: 43, number: 56 },
  { country: 'AG', percentage: 43, number: 34 },
  { country: 'AR', percentage: 43, number: 21 },
  { country: 'AM', percentage: 43, number: 56 },
  { country: 'AU', percentage: 43, number: 34 },
  { country: 'AZ', percentage: 43, number: 21 },
];

const App = () => {
  return (
    <div className='w-[300px] mx-auto'>
      <div className='mb-5'>
        <h2 className='mb-3 text-grey-1 font-medium text-app-m'>Countries</h2>

        <div className='rounded-xl bg-white shadow-soft pt-3'>
          <Diagram
            data={getCountriesData(countries)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
