import { useState } from 'react';
import { LuChevronLeft } from 'react-icons/lu';

import { Hr } from 'src/lib/base/StyledComponents/Divisors';

import If from '../If';
import { AccordionContainer, AccordionContent, AccordionHeader } from './styled';

const Accordion = (props: Props.Accordion) => {
  const { title, content, delayLoad } = props;
  const [active, setActive] = useState(false);
  const [delay, setDelay] = useState(!!delayLoad);

  return (
    <AccordionContainer
      active={active}
      onClick={() => setActive(!active)}
      onMouseEnter={() => delay && setDelay(false)}
    >
      <AccordionHeader>
        {title}
        <LuChevronLeft className="icon" size={8} />
      </AccordionHeader>
      <AccordionContent>
        <Hr />
        <If check={!delay}>{content}</If>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
