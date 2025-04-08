/* eslint-disable no-tabs */
import {
  http, HttpResponse, RequestHandler,
} from 'msw';
import { API_ENDPOINT } from '~/@api/endpoint';

import CarouselItem from '~/@shared/_assets/png/mock/carousel.png';

// import PopularImage1 from '~/@shared/_assets/png/mock/homeItem/popular_image_1.png';
// import PopularImage2 from '~/@shared/_assets/png/mock/homeItem/popular_image_2.png';
// import PopularImage3 from '~/@shared/_assets/png/mock/homeItem/popular_image_3.png';
// import PopularImage4 from '~/@shared/_assets/png/mock/homeItem/popular_image_4.png';
// import LatestImage1 from '~/@shared/_assets/png/mock/homeItem/latest_image_1.png';
// import LatestImage2 from '~/@shared/_assets/png/mock/homeItem/latest_image_2.png';
// import LatestImage3 from '~/@shared/_assets/png/mock/homeItem/latest_image_3.png';
// import InisghtImage1 from '~/@shared/_assets/png/mock/homeItem/insight_image_1.png';
// import InisghtImage2 from '~/@shared/_assets/png/mock/homeItem/insight_image_2.png';
// import InisghtImage3 from '~/@shared/_assets/png/mock/homeItem/insight_image_3.png';

const getCarouselItems = http.get(API_ENDPOINT.GET_CAROUSEL_ITEM, () => HttpResponse.json({
  data: [
    { id: 'carousel 1', image: CarouselItem.src },
    { id: 'carousel 2', image: 'https://placehold.co/600x400' },
    { id: 'carousel 3', image: CarouselItem.src },
  ],
}));

// const getHomeItems = http.get(API_ENDPOINT.GET_HOME_ITEM, () => HttpResponse.json({
//   data: {
//     popular: [
//       {
//         id: '1',
//         image: PopularImage1.src,
//         author: 'Fadhil Khalid',
//         date: 'September 17, 2024',
//         title: 'Introduction to machinery safety',
//         description: 'How to control the risks of injuries caused by equipment and machinery.',
//       },
//       {
//         id: '2',
//         image: PopularImage2.src,
//         author: 'Rosa Pani',
//         date: 'September 16, 2024',
//         title: 'Have the right workplace facilities',
//       },
//       {
//         id: '3',
//         image: PopularImage3.src,
//         author: 'Fadhil Khalid',
//         date: 'September 15, 2024',
//         title: 'Provision and Use of Work Equipment Regulations',
//       },
//       {
//         id: '4',
//         image: PopularImage4.src,
//         author: 'Rosa Pani',
//         date: 'September 17, 2024',
//         title: 'Report accidents and illness',
//       },
//     ],
//     latest: [
//       {
//         id: '1',
//         image: LatestImage1.src,
//         author: 'Rosa Pani',
//         date: 'October 14, 2024',
//         title: 'Farm Owner Fined After Death of Roofer',
//         description: 'The farmer was fined £16,000 after incorrect equipment was used to access...',
//       },
//       {
//         id: '2',
//         image: LatestImage2.src,
//         author: 'Fadhil Khalid',
//         date: 'October 10, 2024',
//         title: 'Company Fined Following Crane Collapse',
//         description: 'The £750,000 fine was issued after a crane collapsed at a dock, putting workers lives at risk...',
//       },
//       {
//         id: '3',
//         image: LatestImage3.src,
//         author: 'Fadhil Khalid',
//         date: 'October 9, 2024',
//         title: 'Crown Censure Issued Following Death of Soldier',
//         description: 'A 51-year-old man suffered fatal injuries while taking part in Jackal driver training with five other...',
//       },
//     ],
//     insight: [
//       {
//         id: '1',
//         image: InisghtImage1.src,
//         author: 'Fadhil Khalid',
//         date: 'October 9, 2024',
//         title: 'Using Work Equipment Safely',
//         description: 'Every year, there are a number of accidents from using work equipment, including machinery, Every year, there are a number of accidents from using work equipment, including machinery',
//       },
//       {
//         id: '2',
//         image: InisghtImage2.src,
//         author: 'Rosa Pani',
//         date: 'September 25, 2024',
//         title: 'Introduction to Working at Height',
//         description: 'Measures employers can take to reduce the risk of their workers falling while working at height, Measures employers can take to reduce the risk of their workers falling while working at height',
//       },
//       {
//         id: '3',
//         image: InisghtImage3.src,
//         author: 'Rosa Pani',
//         date: 'September 24, 2024',
//         title: 'Safe Use of Ladders and Stepladders',
//         description: 'How, when and where to use ladders and stepladders safely, How, when and where to use ladders and stepladders safely',
//       },
//     ],
//   },
// }));

// const getArticleData = http.get(API_ENDPOINT.GET_ARTICLE_DATA.replace(':id', '*'), () => HttpResponse.json({
//   data: {
//     articleContent: {
//       title: 'Introduction to machinery safety',
//       author: 'Fadhil Khalid',
//       date: 'September 17, 2024',
//       content: '<div id="page-contents" class="hse-grid-column-two-thirds hse-page-contents">  <!-- start page content --><!-- InstanceBeginEditable name="content" --><h2>Why machinery safety is important</h2>	<p>As an  employer, you should consider how your workers use machinery. You should also  have adequate maintenance arrangements in place to ensure it remains safe to  use.</p><p>Moving  machinery can cause injuries when:</p><ul>  <li>people can be struck by moving parts or ejected material</li>  <li>body parts can be drawn in or trapped between rollers, belts and pulley drives</li>  <li>sharp edges can cause cuts and severing injuries, sharp-pointed parts can cause stabbing or puncture the skin. </li>  <li>rough surface parts can cause friction or abrasion</li>  <li>people can be crushed, between parts moving together or towards a fixed part of a machine, wall or other object, or 2 parts moving past one another can cause shearing</li>  <li>parts, materials and emissions (such as steam or water) can be hot or cold enough to cause burns or scalds</li>  <li>electricity can cause electrical shock and burns.</li></ul><p>Injuries may be more likely to occur when:</p><ul>  <li>machinery becomes unreliable and develops faults</li>  <li>machines are used improperly through inexperience or lack of training </li></ul><h2>Assessing and managing the risk</h2><p>Before you or your workers use any machine, you should think about what risks may occur and how these can be managed. Check the machine is complete, with all safeguards fitted, and is free from defects. The term \'safeguarding\' includes guards, interlocks, two-hand controls, light guards and, pressure-sensitive mats.</p>	<p>By law, the supplier must provide the right safeguards and inform buyers of any risks (\'residual risks\') that could not be designed out. Users need to be aware of these and manage them.</p>	<p>Make sure you identify and manage risks from badly designed safeguards. These may be inconvenient to use or easily overridden, which could encourage your workers to risk injury and break the law. If they are doing this, find out why and take appropriate action to manage this.</p>	<p>Produce a safe system of work for using and <a href="maintenance.htm">maintaining the machine</a><sup class="hideFromScreen">[2]</sup>. Maintenance may require the inspection of critical features where deterioration would cause a risk.</p>	<p>Look at any residual risks listed in the information provided with the machine. Make sure they are included in the safe system of work.</p>	<p>Ensure every static machine has been installed properly and is stable (usually fixed down).</p>	<h2>Choose the right machine for the job</h2>	<p>Do not put machines where customers or visitors may be exposed to risk.</p>	<p>Make sure you identify and manage risks from electrical, hydraulic or pneumatic power supplies.</p>	<p>Make sure the machine is:</p><ul>  <li>safe for any work that has to be done when setting up, during normal use, when clearing blockages, when carrying out repairs for breakdowns, and during planned maintenance</li>  <li>properly switched off, isolated or locked off before taking any action to remove blockages, clean or make adjustments</li></ul><h2>Use control measures</h2><h3>Preventing access to dangerous parts</h3>	<p>Think about how you can make a machine safe, it may be necessary to use a combination of measures. </p>	<p>The measures you use to prevent access to dangerous parts should be in the following order:</p><ol start="1" type="1">  <li>Use fixed guards (for example secured with screws or nuts and bolts) to enclose the dangerous parts, whenever practical. </li></ol><p>Use the best material for these guards  – plastic may be easy to see through but can be damaged easily. Where you use  wire mesh or similar materials, make sure the holes are not large enough to  allow access to moving parts.</p><ol start="2" type="2">  <li>If fixed guards are not practical, use other methods, like interlocking the guard so the machine cannot start before the guard is closed and it cannot be opened while the machine is still moving. </li></ol><p>In some cases, trip systems such as  photoelectric devices, pressure-sensitive mats or automatic guards may be used  if other guards are not practical.</p><ol start="3" type="3">  <li>Where       guards cannot give full protection, use jigs, holders or push sticks if it       is practical to do so.</li>  <li>Control       any remaining risk by providing the operator with the necessary       information, instruction, training, supervision and appropriate safety       equipment.</li></ol><h3>Other control measures</h3><p>If machines are controlled by programmable electronic systems, changes to any programmes should be carried out by a <a href="../simple-health-safety/gettinghelp/index.htm">competent person</a><sup class="hideFromScreen">[3]</sup> (someone who has the necessary skills, knowledge and experience to carry out the work safely). Keep a record of such changes and check they have been made properly.</p>	<p>Ensure control switches are clearly marked to show what they do.</p>	<p>Have emergency stop controls where necessary, for example mushroom-head push buttons, within easy reach.</p>	<p>Make sure operating controls are designed and placed to avoid accidental operation and injury, for example by using two-hand controls where necessary and shrouding start buttons and pedals.</p>	<p>Do not let unauthorised, unqualified or untrained people use machinery – never allow children to operate or help at machines. Some <a href="../vulnerable-workers/index.htm">vulnerable workers</a><sup class="hideFromScreen">[4]</sup>, such as new starters, young people or those with disabilities, may be particularly at risk. Everyone who uses the machine requires adequate instruction, training and supervision.</p><p>Adequate training should ensure that those who use the machine are <a href="../competence/what-is-competence.htm">competent</a><sup class="hideFromScreen">[5]</sup> to use it safely. This includes ensuring they have the correct skills, knowledge and experience. Sometimes formal qualifications are needed, for example for chainsaw operators.</p>	<p>Supervisors must also be properly trained and competent to be effective. They may need extra specific training and there are recognised courses for supervisors.</p>	<p>Ensure the work area around the machine is kept clean and tidy, free from obstructions or slips and trips hazards, and is well lit.</p>	<h2>Machinery safety for workers</h2>		<h3>Ensure machinery is safe</h3>	<p>To ensure machinery is safe you should check the machine is well maintained and fit to be used. Make sure it is appropriate for the job, working properly and that all the safety measures are in place.</p>	<p>Examples of safety measures include guards, isolators, locking mechanisms and emergency off switches.</p>	<p>Use the machine properly and in accordance with the manufacturer\'s instructions.</p>	<p>Make sure you are wearing the appropriate protective clothing and equipment required for that machine, such as safety glasses, hearing protection and safety shoes.</p>	<h3>Prevent accidents and injuries</h3>	<p>Don’t use a machine or appliance that has a danger sign or tag attached to it. These signs should only be removed by an authorised person who is satisfied that the machine or process is now safe.</p>	<p>Never wear dangling chains, loose clothing, rings or have loose, long hair that could get caught up in moving parts.</p>	<p>Don’t distract people who are using machines.</p>	<p>Never remove any safeguards, even if they seem to make the job more difficult.</p>	<h2>Examples of accidents involving machinery </h2>	<div data-aria-accordion="" data-multi="" data-transition="" data-default="none" id="acc_1-0" class="accordion">	<h3 id="accordionSection1" data-aria-accordion-heading="" class="accordion__heading"><button type="button" aria-controls="acc_1-0_panel_1" id="acc_1-0_panel_1_trigger" class="accordion__trigger" aria-expanded="false" data-current="false">Poor training</button></h3>	<div data-aria-accordion-panel="" class="accordion__panel--transition accordion__panel" id="acc_1-0_panel_1" aria-hidden="true">		<p>A company were prosecuted after a worker received horrific injuries, almost severing their left arm when using a cross-cut saw.</p>				<h4>What caused the accident?</h4>				<p>The nose guard had not been set correctly because training was inadequate. The worker had no previous experience and had only 5 minutes\' training on the saw. This did not include any instruction about the saw guards and how to adjust them properly. The saw was also unsuitable for training purposes.</p>			</div>	<h3 id="accordionSection2" data-aria-accordion-heading="" class="accordion__heading"><button type="button" aria-controls="acc_1-0_panel_2" id="acc_1-0_panel_2_trigger" class="accordion__trigger" aria-expanded="false" data-current="false">Risks not assessed</button></h3>	<div data-aria-accordion-panel="" class="accordion__panel--transition accordion__panel" id="acc_1-0_panel_2">				<p>A company were prosecuted after a worker was killed when they were crushed in the rollers of a rubber and cloth inspection machine.</p>		<h4>What caused the accident?</h4>		<p>The company had not assessed the risks associated with using the machine. They had not checked that it was safe to use following modifications when the nip guards were removed and an unguarded roller was inserted.</p>			</div></div>  <h2>The law</h2>	  <p>The aim of the <a href="puwer.htm">Provision and Use of Work Equipment Regulations (PUWER)</a><sup class="hideFromScreen">[6]</sup> is to ensure that work equipment is safe to use, regardless of its age, condition or origin.</p>	  <p>PUWER places duties on employers and others who control how work equipment is used. This includes those who hire it out to be used by others.</p>	  <p>The Lifting Operations and <a href="loler.htm">Lifting Equipment Regulations (LOLER)</a><sup class="hideFromScreen">[7]</sup> apply to the safe use of lifting equipment.</p>	<div class="hse-back-to-top">    <div class="hse-back-to-top__container hse-back-to-top--hidden" aria-hidden="true">    <div class="hse-width-container"> 		<!-- InstanceEndEditable -->  <!-- end page content -->          </div>',
//       image: PopularImage1.src,
//     },
//     related: [
//       {
//         id: '1',
//         image: LatestImage1.src,
//         author: 'Rosa Pani',
//         date: 'October 14, 2024',
//         title: 'Farm Owner Fined After Death of Roofer',
//         description: 'The farmer was fined £16,000 after incorrect equipment was used to access...',
//       },
//       {
//         id: '2',
//         image: LatestImage2.src,
//         author: 'Fadhil Khalid',
//         date: 'October 10, 2024',
//         title: 'Company Fined Following Crane Collapse',
//         description: 'The £750,000 fine was issued after a crane collapsed at a dock, putting workers lives at risk...',
//       },
//       {
//         id: '3',
//         image: LatestImage3.src,
//         author: 'Fadhil Khalid',
//         date: 'October 9, 2024',
//         title: 'Crown Censure Issued Following Death of Soldier',
//         description: 'A 51-year-old man suffered fatal injuries while taking part in Jackal driver training with five other...',
//       },
//     ],
//     moreItem: [
//       {
//         id: '1',
//         image: InisghtImage1.src,
//         author: 'Fadhil Khalid',
//         date: 'October 9, 2024',
//         title: 'Using Work Equipment Safely',
//         description: 'Every year, there are a number of accidents from using work equipment, including machinery, Every year, there are a number of accidents from using work equipment, including machinery',
//       },
//       {
//         id: '2',
//         image: InisghtImage2.src,
//         author: 'Rosa Pani',
//         date: 'September 25, 2024',
//         title: 'Introduction to Working at Height',
//         description: 'Measures employers can take to reduce the risk of their workers falling while working at height, Measures employers can take to reduce the risk of their workers falling while working at height',
//       },
//       {
//         id: '3',
//         image: InisghtImage3.src,
//         author: 'Rosa Pani',
//         date: 'September 24, 2024',
//         title: 'Safe Use of Ladders and Stepladders',
//         description: 'How, when and where to use ladders and stepladders safely, How, when and where to use ladders and stepladders safely',
//       },
//     ],
//   },
// }));

// const getArticleList = http.get(API_ENDPOINT.GET_ARTICLE_LIST, () => {
//   const res: any[] = [];
//   const photos = [LatestImage1.src, LatestImage2.src, LatestImage3.src, PopularImage1.src, PopularImage2.src, PopularImage3.src, PopularImage4.src];
//   const titles = ['Introduction to machinery safety', 'Farm Owner Fined After Death of Roofer', 'Company Fined Following Crane Collapse', 'Crown Censure Issued Following Death of Soldier', 'Using Work Equipment Safely', 'Introduction to Working at Height', 'Safe Use of Ladders and Stepladders'];
//   const descriptions = ['The farmer was fined £16,000 after incorrect equipment was used to access...', 'The £750,000 fine was issued after a crane collapsed at a dock, putting workers lives at risk...', 'A 51-year-old man suffered fatal injuries while taking part in Jackal driver training with five other...', 'Every year, there are a number of accidents from using work equipment, including machinery, Every year, there are a number of accidents from using work equipment, including machinery', 'Measures employers can take to reduce the risk of their workers falling while working at height, Measures employers can take to reduce the risk of their workers falling while working at height'];
//   for (let index = 0; index < 12; index++) {
//     res.push({
//       id: Math.floor(Math.random() * 100),
//       image: photos[Math.floor(Math.random() * 7)],
//       author: Math.floor(Math.floor(Math.random() * 2)) === 1 ? 'Rosa Pani' : 'Fadhil Khalid',
//       date: 'October 14, 2024',
//       title: titles[Math.floor(Math.random() * 7)],
//       description: descriptions[Math.floor(Math.random() * 5)],
//     });
//   }
//   return HttpResponse.json({
//     data: res,
//   });
// });

export const handlers: RequestHandler[] = [getCarouselItems];
