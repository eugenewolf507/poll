import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import ProgressBar from './ProgressBar';

export default function Poll({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const numberOfUsers = 46;
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [option1, setOption1] = useState(0);
  const [option2, setOption2] = useState(0);
  const [option3, setOption3] = useState(0);
  const [option4, setOption4] = useState(0);
  const [option5, setOption5] = useState(0);
  const [option6, setOption6] = useState(0);
  const [option7, setOption7] = useState(0);

  //form logic START
  const options = [
    { value: '1', label: 'Варіант 1' },
    { value: '2', label: 'Варіант 2' },
    { value: '3', label: 'Варіант 3' },
    { value: '4', label: 'Варіант 4' },
    { value: '5', label: 'Варіант 5' },
    { value: '6', label: 'Варіант 6' },
    { value: '7', label: 'Варіант 7' },
  ];

  // get data start
  useEffect(() => {
    getPoll();
  }, [session]);

  async function getPoll() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('results')
        .select(`option1, option2, option3, option4, option5, option6, option7`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setOption1(data.option1);
        setOption2(data.option2);
        setOption3(data.option3);
        setOption4(data.option4);
        setOption5(data.option5);
        setOption6(data.option6);
        setOption7(data.option7);
      }
    } catch (error) {
      alert('Error loading user data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  //get data end

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    let tempO1 = option1,
      tempO2 = option2,
      tempO3 = option3,
      tempO4 = option4,
      tempO5 = option5,
      tempO6 = option6,
      tempO7 = option7;
    event.preventDefault();
    console.log('Selected option: ', selectedOption);
    switch (selectedOption) {
      case '1':
        tempO1++;
        setOption1(tempO1);
        break;
      case '2':
        tempO2++;
        setOption2(tempO2);
        break;
      case '3':
        tempO3++;
        setOption3(tempO3);
        break;
      case '4':
        tempO4++;
        setOption4(tempO4);
        break;
      case '5':
        tempO5++;
        setOption5(tempO5);
        break;
      case '6':
        tempO6++;
        setOption6(tempO6);
        break;
      case '7':
        tempO7++;
        setOption7(tempO7);
        break;
    }
    updatePoll({
      option1: tempO1,
      option2: tempO2,
      option3: tempO3,
      option4: tempO4,
      option5: tempO5,
      option6: tempO6,
      option7: tempO7,
    });
  };
  //form logic END

  //set data START
  async function updatePoll({
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,
    option7,
  }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        updated_at: new Date().toISOString(),
        option1,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
      };

      let { error } = await supabase.from('results').upsert(updates);
      if (error) throw error;
      alert(`Profile updated with `);
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  //set data END

  //utils
  const getVotedQuantity = () =>
    option1 + option2 + option3 + option4 + option5 + option6 + option7;
  const getVotedPercentage = () => (getVotedQuantity() * 100) / numberOfUsers;
  return (
    <div className="form-widget">
      <form onSubmit={handleSubmit}>
        {options.map((option) => (
          <label key={option.value} className="radio">
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />
            {option.label}
          </label>
        ))}
        <button type="submit" disabled={selectedOption ? false : true}>
          Submit
        </button>
      </form>
      <p>
        {getVotedQuantity()} voted from {numberOfUsers}
      </p>
      <p>Percent of voted: {getVotedPercentage()}</p>
      <div>
        <ProgressBar percent={getVotedPercentage()} />
      </div>
      <br />
      <br />
      <br />

      <div>
        Option 1: {+option1} voted
        <ProgressBar percent={(+option1 * 100) / getVotedQuantity()} />
      </div>
      <div>
        Option 2: {+option2} voted
        <ProgressBar percent={(+option2 * 100) / getVotedQuantity()} />
      </div>
      <div>
        Option 3: {+option3} voted
        <ProgressBar percent={(+option3 * 100) / getVotedQuantity()} />
      </div>
      <div>
        Option 4: {+option4} voted
        <ProgressBar percent={(+option4 * 100) / getVotedQuantity()} />
      </div>
      <div>
        Option 5: {+option5} voted
        <ProgressBar percent={(+option5 * 100) / getVotedQuantity()} />
      </div>
      <div>
        Option 6: {+option6} voted
        <ProgressBar percent={(+option6 * 100) / getVotedQuantity()} />
      </div>
      <div>
        Option 7: {+option7} voted
        <ProgressBar percent={(+option7 * 100) / getVotedQuantity()} />
      </div>

      {/* update button */}
      {/* <div>
        <button
          className="button primary block"
          onClick={() =>
            updatePoll({
              option1,
              option2,
              option3,
              option4,
              option5,
              option6,
              option7,
            })
          }
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Vote'}
        </button>
      </div> */}
    </div>
  );
}
