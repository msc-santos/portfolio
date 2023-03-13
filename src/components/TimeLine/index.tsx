import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import textsPages from 'src/constant/textsPages.json'

export default function CustomizedTimeline() {
  // TODO: finalizar essa tela 
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#7356b5', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #7356b5' }}
        date={textsPages.education.card_two.date}
        iconStyle={{ background: '#7356b5', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">{textsPages.education.card_two.title}</h3>
        <br />
        <h4 className="vertical-timeline-element-subtitle">{textsPages.education.card_two.where}</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#7356b5', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #7356b5' }}
        date={textsPages.education.card_one.date}
        iconStyle={{ background: '#7356b5', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">{textsPages.education.card_one.title}</h3>
        <br />
        <h4 className="vertical-timeline-element-subtitle">{textsPages.education.card_one.where}</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
