import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import TotallyVoted from './TotalyVoted';
import PollForm from './PollForm';
import Results from './Results';

export default function Poll({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const numberOfUsers = 49;
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [doesUserVoted, setDoesUserVoted] = useState(false);
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

  // get data useEffect
  useEffect(() => {
    getProfile();
    getPoll();
  }, [session]);

  async function getPoll() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('results')
        .select(`option1, option2, option3, option4, option5, option6, option7`)
        .eq('id', 'poll1')
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

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`email`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        if (data.email === session.user.email) {
          setDoesUserVoted(true);
        }
      }
    } catch (error) {
      alert('Error loading user data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
        id: 'poll1',
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
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ email }) {
    try {
      setLoading(true);
      const updates = {
        id: user.id,
        email,
        updated_at: new Date().toISOString(),
      };
      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
    setDoesUserVoted(true);
    const email = session.user.email;
    updateProfile({ email });
  };

  //utils
  const calculateVotedQuantity = () =>
    option1 + option2 + option3 + option4 + option5 + option6 + option7;
  const calculateVotedPercentage = () =>
    Math.round((calculateVotedQuantity() * 100) / numberOfUsers);

  return (
    <div className="form-widget">
      <div>
        {' '}
        {doesUserVoted
          ? 'Дякую, Ви вже проголосували. Ось результати:'
          : 'Проголосуйте, будь ласка!'}
      </div>
      {loading ? (
        <div>Завантаження...</div>
      ) : (
        <>
          <TotallyVoted
            numberOfUsers={numberOfUsers}
            calculateVotedQuantity={calculateVotedQuantity}
            calculateVotedPercentage={calculateVotedPercentage}
          />
          {doesUserVoted ? (
            <Results
              option1={option1}
              option2={option2}
              option3={option3}
              option4={option4}
              option5={option5}
              option6={option6}
              option7={option7}
              calculateVotedQuantity={calculateVotedQuantity}
            />
          ) : (
            <PollForm
              options={options}
              selectedOption={selectedOption}
              handleSubmit={handleSubmit}
              handleOptionChange={handleOptionChange}
            />
          )}
        </>
      )}

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