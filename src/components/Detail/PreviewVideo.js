import Youtube from 'react-youtube';
import Accordion, { IconPlay, IconLock, Card } from '../Accordion';
import Modal from '../Modal';

const PreviewVideo = ({ previews }) => {
   return (
      <div className="accordion">
         <Accordion>
            {
               (active, toggle) => previews?.map(item => 
                  <Card key={item.id} id={item.id} name={item?.name} child={item?.lesson} active={active} toggle={toggle}>
                     {
                        item?.lesson?.length > 0 && item.lesson.map((less, index) => 
                           <div key={less.id} className="relative flex justify-between items-center pl-8 pr-4 py-2 hover:bg-[#e8e5e5]">
                              <span className="c-4">{less?.name ?? 'Lesson name'}</span>
                              {
                                 index === 0 &&
                                 <Modal content={ (toggleModal) => <Youtube id={less?.video} videoId={less?.video} opts={{ playerVars: { autoplay: 1, controls: 0, showInfo: 0 } }} /> }>
                                    {
                                       toggleModal => <span onClick={toggleModal} className="link-wrapper"></span>
                                    }
                                 </Modal>
                              }
                              {
                                 index === 0 && <IconPlay className="fill-[#36C2CF] w-5 h-5" />
                              }
                              {
                                 index !== 0 && <IconLock />
                              }
                           </div>
                        )
                     }
                  </Card>)
            }
         </Accordion>
      </div>
   );
}

export default PreviewVideo;