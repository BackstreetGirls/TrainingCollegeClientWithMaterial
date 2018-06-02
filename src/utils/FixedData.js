import recommendation0 from '../assets/Recommendation/recommendation0.jpg';
import recommendation1 from '../assets/Recommendation/recommendation.jpeg';
import recommendation2 from '../assets/Recommendation/recommendation2.png';
import recommendation3 from '../assets/Recommendation/recommendation3.jpg';
import recommendation4 from '../assets/Recommendation/recommendation4.jpeg';
import recommendation9 from '../assets/Recommendation/recommendation9.jpeg';
import recommendation10 from '../assets/Recommendation/recommendation10.jpg';

const courses = [
  {
    key: 0,
    img: recommendation0,
    title: 'Computer Application in Economic Management',
    rate: 5,
    price: '¥ 99.00',
    deadline: '2018.5.15',
    description: 'Help students master computer skills and improve the quality and efficiency of economic and management problems.',
    registered_total: '40/500',
    start_date: '2018.5.26',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '2 & 16',
    course_detail: 'This course is based on helping students master and apply modern computer technology, solving various economic management theories and practical problems, and taking the computer knowledge and skills that economic managers must have in the content arrangement as the basic starting point, and computer technology and quantitative analysis methods. It is closely integrated with the principles of economic management and fully reflects the interdependence, mutual penetration, mutual support, mutual influence, and mutual restraint with other economic management courses. It is the first of its kind in the economics and management disciplines of financial institutions and all other universities in the country.',
    teacher: 'Professor: LanJuan Liu',
    provider: 'Shanghai University of Finance',
    provider_location: 'xxx',
    provider_email: 'xxx@xxx.com',
    provider_detail:
    'Shanghai University of Finance and Economics is a multi-disciplinary national key university directly under the Ministry of Education of the People\'s Republic of China. It is the national "211 Project" and "985 Project." Advanced Discipline Innovation Platform “Key universities have been selected as “National High-level Innovative Talents Base for Overseas Talents”[1], “Key Research Base for Humanities and Social Sciences of the Ministry of Education”, “Excellent Legal Talents Education and Training Program”, and “National Construction of High-Level Universities” The "Government Graduate Program" is one of the first batch of doctoral awarding units in the country and is jointly built by the Ministry of Education, the Ministry of Finance, and the Shanghai Municipal People\'s Government.',
  },
  {
    key: 1,
    img: recommendation1,
    title: 'Master Python',
    rate: 5,
    price: '¥ 129.00',
    deadline: '2018.7.3',
    description: 'Take you master graphic design foundation skills.',
    registered_total: '2/500',
    start_date: '2018.7.18',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 12',
    course_detail: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll use the technologies learned throughout the Specialization to design and create your own applications for data retrieval, processing, and visualization.',
    teacher: 'Associate Professor: Charles Severance',
    provider: 'The University of Michigan',
    provider_location: 'xxx',
    provider_email: 'michigan123@gmail.com',
    provider_detail: 'The University of Michigan is recognized as a leader in higher education due to the outstanding quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250 degree programs.\n' +
    '\n' +
    '                    The mission of the University of Michigan is to serve the people of Michigan and the world through preeminence in creating, communicating, preserving and applying knowledge, art, and academic values, and in developing leaders and citizens who will challenge the present and enrich the future.\n',
  },
  {
    key: 2,
    img: recommendation2,
    title: 'Essay Writing',
    rate: 5,
    price: '¥ 229.00',
    deadline: '2018.5.18',
    description: 'Getting started with Essay Writing.',
    registered_total: '2/500',
    start_date: '2018.6.10',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '1-3 & 4',
    course_detail: 'This is the second course in the Academic English: Writing specialization.  By introducing you to three types of academic essays, this course will especially help prepare you for work in college classes, but anyone who wants to improve his or her writing skills can benefit from this course.',
    teacher: 'Instructor, International Programs: Tamy Chapman',
    provider: 'UCI Division of Continuing Education',
    provider_location: 'xxx',
    provider_email: 'xxx123@gmail.com',
    provider_detail: 'Consistently ranked among the nation’s best universities, UC Irvine is noted for top-rated research and graduate programs, extensive commitment to undergraduate education, and growing number of professional schools and programs of academic and social significance.\n+' +
    'Since 1965, the University of California, Irvine has combined the strengths of a major research university with the bounty of an incomparable Southern California location. UCI’s unyielding commitment to rigorous academics, cutting-edge research, and leadership and character development makes the campus a driving force for innovation and discovery that serves our local, national and global communities in many ways.\n',
  },
  {
    key: 3,
    img: recommendation3,
    title: 'Fundamentals of Graphic Design',
    rate: 5,
    price: '¥ 479.00',
    deadline: '2018.8.18',
    description: 'Take you master graphic design foundation skills.',
    registered_total: '2/500',
    start_date: '2018.9.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '5-8 & 4',
    course_detail: 'Graphic Design is all around us! Words and pictures—the building blocks of graphic design—are the elements that carry the majority of the content in both the digital world and the printed world. As graphic design becomes more visible and prevalent in our lives, graphic design as a practice becomes more important in our culture.',
    teacher: 'Faculty, Program in Graphic Design: Anther Kiley',
    provider: 'CaLARTS',
    provider_location: 'xxx',
    provider_email: 'xxx@gmail.com',
    provider_detail: 'CalArts\' Graphic Design program is one of the premier programs for the study of graphic and print arts in the U.S.\n' +
    '\n' +
    'CalArts has earned an international reputation as the leading college of the visual and performing arts in the United States. Offering rigorous undergraduate and graduate degree programs through six schools—Art, Critical Studies, Dance, Film/Video, Music, and Theater—CalArts has championed creative excellence, critical reflection, and the development of new forms and expressions.\n',
  },
  {
    key: 4,
    img: recommendation4,
    title: 'Neural Networks and Deep Learning',
    rate: 5,
    price: '¥ 0.00',
    deadline: '2018.7.14',
    description: 'If you want to break into cutting-edge AI, this course will help you do so.',
    registered_total: '2/500',
    start_date: '2018.9.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 4',
    course_detail: 'In this course, you will learn the foundations of deep learning. When you finish this class, you will:\n' +
    '- Understand the major technology trends driving Deep Learning\n' +
    '- Be able to build, train and apply fully connected deep neural networks \n' +
    '- Know how to implement efficient (vectorized) neural networks \n' +
    '- Understand the key parameters in a neural network\'s architecture ',
    teacher: 'Professor:  Andrew Ng',
    provider: 'deeplearning.ai',
    provider_location: 'xxx',
    provider_email: 'deeplearning123@gmail.com',
    provider_detail: 'deeplearning.ai is Andrew Ng\'s new venture which amongst others, strives for providing comprehensive AI education beyond borders.',
  },
  {
    key: 5,
    img: recommendation1,
    title: 'Master Python',
    rate: 5,
    price: '¥ 129.00',
    deadline: '2018.7.18',
    description: 'Take you master graphic design foundation skills.',
    registered_total: '2/500',
    start_date: '2018.8.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 12',
    course_detail: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll use the technologies learned throughout the Specialization to design and create your own applications for data retrieval, processing, and visualization.',
    teacher: 'Associate Professor: Charles Severance',
    provider: 'The University of Michigan',
    provider_location: 'xxx',
    provider_email: 'michigan123@gmail.com',
    provider_detail: 'The University of Michigan is recognized as a leader in higher education due to the outstanding quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250 degree programs.\n' +
    '\n' +
    '                    The mission of the University of Michigan is to serve the people of Michigan and the world through preeminence in creating, communicating, preserving and applying knowledge, art, and academic values, and in developing leaders and citizens who will challenge the present and enrich the future.\n',
  },
  {
    key: 6,
    img: recommendation1,
    title: 'Master Python',
    rate: 5,
    price: '¥ 129.00',
    deadline: '2018.7.18',
    description: 'Take you master graphic design foundation skills.',
    registered_total: '2/500',
    start_date: '2018.8.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 12',
    course_detail: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll use the technologies learned throughout the Specialization to design and create your own applications for data retrieval, processing, and visualization.',
    teacher: 'Associate Professor: Charles Severance',
    provider: 'The University of Michigan',
    provider_location: 'xxx',
    provider_email: 'michigan123@gmail.com',
    provider_detail: 'The University of Michigan is recognized as a leader in higher education due to the outstanding quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250 degree programs.\n' +
    '\n' +
    '                    The mission of the University of Michigan is to serve the people of Michigan and the world through preeminence in creating, communicating, preserving and applying knowledge, art, and academic values, and in developing leaders and citizens who will challenge the present and enrich the future.\n',
  },
  {
    key: 7,
    img: recommendation1,
    title: 'Master Python',
    rate: 5,
    price: '¥ 129.00',
    deadline: '2018.7.18',
    description: 'Take you master graphic design foundation skills.',
    registered_total: '2/500',
    start_date: '2018.8.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 12',
    course_detail: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll use the technologies learned throughout the Specialization to design and create your own applications for data retrieval, processing, and visualization.',
    teacher: 'Associate Professor: Charles Severance',
    provider: 'The University of Michigan',
    provider_location: 'xxx',
    provider_email: 'michigan123@gmail.com',
    provider_detail: 'The University of Michigan is recognized as a leader in higher education due to the outstanding quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250 degree programs.\n' +
    '\n' +
    '                    The mission of the University of Michigan is to serve the people of Michigan and the world through preeminence in creating, communicating, preserving and applying knowledge, art, and academic values, and in developing leaders and citizens who will challenge the present and enrich the future.\n',
  },
  {
    key: 8,
    img: recommendation9,
    title: 'Applied Data Science with Python',
    rate: 5,
    price: '¥ 129.00',
    deadline: '2018.5.20',
    description: 'Gain new insights into your data 。Learn to apply data science methods and techniques, and acquire analysis skills.',
    registered_total: '2/500',
    start_date: '2018.5.21',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 12',
    course_detail: 'This course will introduce the learner to network analysis through tutorials using the NetworkX library. The course begins with an understanding of what network analysis is and motivations for why we might model phenomena as networks. The second week introduces the concept of connectivity and network robustness. The third week will explore ways of measuring the importance or centrality of a node in a network. The final week will explore the evolution of networks over time and cover models of network generation and the link prediction problem. ',
    teacher: 'Associate Professor: Charles Severance, Kevyn Collins-Thompson',
    provider: 'The University of Michigan',
    provider_location: 'xxx',
    provider_email: 'michigan123@gmail.com',
    provider_detail: 'Michigan’s academic vigor offers excellence across disciplines and around the globe. The University is recognized as a leader in higher education due to the outstanding quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250 degree programs.',
  },
  {
    key: 9,
    img: recommendation10,
    title: 'Algorithms, Part II',
    rate: 5,
    price: '¥ 0.00',
    deadline: '2018.7.14',
    description: 'Take you master algorithms skills.',
    registered_total: '2/500',
    start_date: '2018.8.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 6',
    course_detail: ' This course covers the essential information that every serious programmer needs to know about algorithms and data structures, with emphasis on applications and scientific performance analysis of Java implementations. Part I covers elementary data structures, sorting, and searching algorithms. Part II focuses on graph- and string-processing algorithms.',
    teacher: 'Associate Professor: Robert Sedgewick',
    provider: 'Princeton University',
    provider_location: 'xxx',
    provider_email: 'princeton123@gmail.com',
    provider_detail: 'Princeton University is a private research university located in Princeton, New Jersey, United States. It is one of the eight universities of the Ivy League, and one of the nine Colonial Colleges founded before the American Revolution.',
  },
];

export default {
  courses,
}
