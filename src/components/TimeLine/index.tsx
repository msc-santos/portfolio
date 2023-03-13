import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { iCustomizedTimeline } from 'src/interfaces/TimeLine'

export default function CustomizedTimeline({ contentTimeLine }: any) {
  return (
    <VerticalTimeline>
      {contentTimeLine.map((item: iCustomizedTimeline) => <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#7356b5', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #7356b5' }}
        date={item.date}
        iconStyle={{ background: '#7356b5', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">{item.title}</h3>
        <br />
        <h4 className="vertical-timeline-element-subtitle">{item.where}</h4>
      </VerticalTimelineElement>)}
    </VerticalTimeline>
  );
}
