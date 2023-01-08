import { useState } from 'react';
import { Title } from 'components/title/title';
import { Text } from 'components/text/text';
import { Input } from 'components/input/input';
import { Select } from 'components/select/select';
import { CheckboxGroup } from 'components/checkbox-group/checkbox-group';
import { RadioGroup } from 'components/radio-group/radio-group';
import { Card } from 'components/card/card';
import { Button } from 'components/button/button';
import { Section } from 'components/section/section';
import { Link } from 'components/link/link';
import { Row, Col } from 'react-flexbox-grid';

export const OPTIONS = [
  { label: 'Jupiter planet', value: 'jupiter' },
  { label: 'Mars planet', value: 'mars' },
  { label: 'Venus planet', value: 'venus' },
  { label: 'Earth planet', value: 'earth' },
  { label: 'Black hole', value: 'black_hole' },
  { label: 'Sun A1', value: 'a1' },
  { label: 'Sun NST', value: 'nst' },
  { label: 'Galaxy Gemini 2', value: 'ge2' },
  { label: 'Galaxy Leo SK', value: 'leo' },
  { label: 'Galaxy Automata-III', value: 'aut3' }
];

const GENDER = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

const PERFERENCE = [
  { label: 'Books', value: 'book' },
  { label: 'eBooks', value: 'ebook' },
  { label: 'Audio books', value: 'audio' },
  { label: 'Journals', value: 'journal' },
  { label: 'Newspapers', value: 'news' }
];

const FORM = {
  name: '',
  gender: '',
  content: [],
  home: '',
  destination: []
};

export  const Introduction = () => {
  const [inputs, setInputs] = useState(FORM);

  function handleChange (
    name: string, 
    value: string | string[]
  ) {
    setInputs(prevState => ({ 
      ...prevState, 
      [name]: value 
    }));
  }

  function clearForm() {
    setInputs(prevState => ({ 
      ...FORM,
      home: prevState.home,
      destination: prevState.destination
    }));
  }

  return (
    <>
      <Title
        size='large'
      >
        LUNAR - A Superellipse React UI Kit
      </Title>

      <Text>
        Superellipse is a germetric shape resembles a transition between a rectangle and a circle. You might have seen its special case (i.e. a squircle) as an app icon on iOS.
      </Text>

      <Text>
        Please go through each component's stories for their detailed usage. Here is an overview of LUNAR.
      </Text>

      <Title>
        The Principles Behind LUNAR
      </Title>

      <Text>
        LUNAR simulates superellipses, resulting in more natural curves compared to the native rounded rectangles. At the same time, LUNAR utilises human-computer interaction principles to produce clean and easy-to-use UI components.
      </Text>

      <Title>
        Component Showcase
      </Title>

      <Row>
        <Col xs>
          <Card
            label='A Form That Reponses To User Action'
          >
            <Text>
              "Fillable" areas are subtly highlighted.
            </Text>
            <Input
              label='Full Name'
              value={inputs.name}
              onChange={value => handleChange('name', value)}
            />
            <RadioGroup
              label='Gender'
              options={GENDER}
              value={inputs.gender}
              onChange={value => handleChange('gender', value)}
            />
            <CheckboxGroup
              label='Favorite Content'
              options={PERFERENCE}
              values={inputs.content}
              onChange={values => handleChange('content', values)}
            />
            <Row>
              <Col 
                xs
              >
                <Button
                  label='Reset'
                  onClick={clearForm}
                />
              </Col>
              <Col 
                xs 
                style={{ textAlign: 'right' }}
              >
                <Button
                  primary
                  label='Submit'
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs>
          <Card
            label='Non-intrusive Label That Allows The Main Content To Shine'
          >
            <Title>
              Clean typography
            </Title>
            <Text>
              Less is more. LUNAR recommends using two main font types, title and body, though it allows size, weight and case transformation customizations.
            </Text>
            <Text>
              Here is <Link>a hyperlink</Link>. Try hovering it!
            </Text>
          </Card>
          <Card
            label='Can you spot the difference?'
          >
            <Text>
              The Select component reinforces the mental model of single vs. multiple choice inputs.
            </Text>
            <Select
              label='Home Location'
              options={OPTIONS}
              value={inputs.home}
              onChange={value => handleChange('home', value)}
              clearable
            />
            <Select
              label='Visitted Location'
              options={OPTIONS}
              multi
              clearable
              values={inputs.destination}
              onChange={values => handleChange('destination', values)}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};