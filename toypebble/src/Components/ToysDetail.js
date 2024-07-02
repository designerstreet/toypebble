import React, { useEffect, useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MyNavbar from "./Navbar";

//Group A
import Set1Image1 from '../assets2/A/1/A-1.png';
import Set1Image2 from '../assets2/A/1/A-1-Minor.jpg';
import Set1Image3 from '../assets2/A/1/A-1-Major.jpg';
import Set1Image4 from '../assets2/A/1/A-1-Book.jpg';
import Set1Image5 from '../assets2/A/1/A-1-Learning.jpg';
import Set2Image1 from '../assets2/A/2/A2.jpg';
import Set2Image2 from '../assets2/A/2/Minor.jpeg';
import Set2Image3 from '../assets2/A/2/Major.jpeg';
import Set2Image4 from '../assets2/A/2/Book.jpeg';
import Set2Image5 from '../assets2/A/2/Learning.jpeg';
import Set3Image1 from '../assets2/A/3/A3.jpg';
import Set3Image2 from '../assets2/A/3/Minor.jpeg';
import Set3Image3 from '../assets2/A/3/Major.jpeg';
import Set3Image4 from '../assets2/A/3/Book.jpeg';
import Set3Image5 from '../assets2/A/3/Learning.jpeg';
import Set4Image1 from '../assets2/A/4/Screenshot 2024-06-24 172304.png';
import Set4Image2 from '../assets2/A/4/Minor.jpeg';
import Set4Image3 from '../assets2/A/4/Major.jpeg';
import Set4Image4 from '../assets2/A/4/Book.jpeg';
import Set5Image1 from '../assets2/A/5/A5.jpg';
import Set5Image2 from '../assets2/A/5/Minor.jpeg';
import Set5Image3 from '../assets2/A/5/Major.jpeg';
import Set5Image4 from '../assets2/A/5/Book.jpeg';
import Set5Image5 from '../assets2/A/5/Learning.jpeg';
import Set6Image1 from '../assets2/A/6/a6.jpg';
import Set6Image2 from '../assets2/A/6/Minor.jpeg';
import Set6Image3 from '../assets2/A/6/Major.jpeg';
import Set6Image4 from '../assets2/A/6/Book.jpeg';
import Set6Image5 from '../assets2/A/6/Learning.jpeg';
import Set7Image1 from '../assets2/A/7/A7.jpg';
import Set7Image2 from '../assets2/A/7/Minor.jpeg';
import Set7Image4 from '../assets2/A/7/Book.jpeg';
import Set7Image5 from '../assets2/A/7/Learning.jpeg';
import Set8Image1 from '../assets2/A/8/a8.jpg';
import Set8Image2 from '../assets2/A/8/Minor.jpeg';
import Set8Image3 from '../assets2/A/8/Major.jpeg';
import Set8Image4 from '../assets2/A/8/Book.jpeg';
import Set8Image5 from '../assets2/A/8/Learning.jpeg';
import Set9Image1 from '../assets2/A/9/a9.jpg';
import Set9Image2 from '../assets2/A/9/Minor.jpeg';
import Set9Image3 from '../assets2/A/9/Major.jpeg';
import Set9Image4 from '../assets2/A/9/Book.jpeg';
import Set9Image5 from '../assets2/A/9/Learning.jpeg';
import Set10Image1 from '../assets2/A/10/a10.jpg';
import Set10Image2 from '../assets2/A/10/Minor.jpeg';
import Set10Image3 from '../assets2/A/10/Major.jpeg';
import Set10Image4 from '../assets2/A/10/Book.jpeg';
import Set10Image5 from '../assets2/A/10/Learning.jpeg';
import Set11Image1 from '../assets2/A/11/a11.jpg';
import Set11Image2 from '../assets2/A/11/Minor.jpeg';
import Set11Image3 from '../assets2/A/11/Major.jpeg';
import Set11Image4 from '../assets2/A/11/Book.jpeg';
import Set11Image5 from '../assets2/A/11/Learning.jpeg';
import Set12Image1 from '../assets2/A/12/a12.jpg';
import Set12Image3 from '../assets2/A/12/Major.jpeg';
import Set12Image4 from '../assets2/A/12/Book.jpeg';
import Set12Image5 from '../assets2/A/12/Learning.jpeg';

//Group B
import Set13Image1 from '../assets2/B/1/B1.jpg';
import Set13Image2 from '../assets2/B/1/Minor.jpeg';
import Set13Image3 from '../assets2/B/1/Major.jpeg';
import Set13Image4 from '../assets2/B/1/Book.jpeg';
import Set13Image5 from '../assets2/B/1/Learning.jpeg';
import Set14Image1 from '../assets2/B/2/B2.jpg';
import Set14Image2 from '../assets2/B/2/Minor.webp';
import Set14Image3 from '../assets2/B/2/Major.jpeg';
import Set14Image4 from '../assets2/B/2/Book.jpeg';
import Set14Image5 from '../assets2/B/2/Learning.jpeg';
import Set15Image1 from '../assets2/B/3/B3.jpg';
import Set15Image2 from '../assets2/B/3/Minor.jpeg';
import Set15Image4 from '../assets2/B/3/Book.jpeg';
import Set15Image5 from '../assets2/B/3/Learning.jpeg';
import Set16Image1 from '../assets2/B/4/B4.jpg';
import Set16Image2 from '../assets2/B/4/Minor.jpeg';
import Set16Image3 from '../assets2/B/4/Major.jpeg';
import Set16Image4 from '../assets2/B/4/Book.jpeg';
import Set16Image5 from '../assets2/B/4/Learning.jpeg';
import Set17Image1 from '../assets2/B/5/B5.jpg';
import Set17Image2 from '../assets2/B/5/Minor.jpeg';
import Set17Image3 from '../assets2/B/5/Major.jpeg';
import Set17Image4 from '../assets2/B/5/Book.jpeg';
import Set17Image5 from '../assets2/B/5/Learning.jpeg';
import Set18Image1 from '../assets2/B/6/B6.jpg';
import Set18Image2 from '../assets2/B/6/Minor.jpg';
import Set18Image3 from '../assets2/B/6/Major.jpeg';
import Set18Image4 from '../assets2/B/6/Book.jpeg';
import Set18Image5 from '../assets2/B/6/Learning.jpeg';
import Set19Image1 from '../assets2/B/7/B7.jpg';
import Set19Image2 from '../assets2/B/7/Minor.jpg';
import Set19Image3 from '../assets2/B/7/Major.jpeg';
import Set19Image5 from '../assets2/B/7/learning.jpeg';
import Set20Image1 from '../assets2/B/8/B8.jpg';
import Set20Image2 from '../assets2/B/8/Minor.jpg';
import Set20Image3 from '../assets2/B/8/major.jpeg';
import Set20Image4 from '../assets2/B/8/Book.jpeg';
import Set20Image5 from '../assets2/B/8/Book1.jpeg';
import Set21Image1 from '../assets2/B/9/B9.jpg';
import Set21Image2 from '../assets2/B/9/Minor.jpeg';
import Set21Image4 from '../assets2/B/9/Book.jpeg';
import Set21Image5 from '../assets2/B/9/Learning.jpeg';
import Set22Image1 from '../assets2/B/10/B10.jpg';
import Set22Image2 from '../assets2/B/10/Minor.jpeg';
import Set22Image3 from '../assets2/B/10/Major.jpeg';
import Set22Image4 from '../assets2/B/10/Book.jpeg';
import Set22Image5 from '../assets2/B/10/Learning.jpeg';
import Set23Image1 from '../assets2/B/11/B11.jpg';
import Set23Image2 from '../assets2/B/11/Minor.jpeg';
import Set23Image3 from '../assets2/B/11/Major.jpeg';
import Set23Image4 from '../assets2/B/11/Book.jpeg';
import Set24Image1 from '../assets2/B/12/B12.jpg';
import Set24Image2 from '../assets2/B/12/Minor.jpeg';
import Set24Image3 from '../assets2/B/12/Major.jpeg';
import Set24Image4 from '../assets2/B/12/Book.jpeg';
import Set24Image5 from '../assets2/B/12/Learning.jpeg';

//Group C
import Set25Image1 from '../assets2/C/1/C1.jpg';
import Set25Image2 from '../assets2/C/1/Minor.jpeg';
import Set25Image3 from '../assets2/C/1/Major.jpeg';
import Set25Image4 from '../assets2/C/1/Book.jpeg';
import Set25Image5 from '../assets2/C/1/Learning.jpeg';
import Set26Image1 from '../assets2/C/2/C2.jpg';
import Set26Image2 from '../assets2/C/2/Minor.jpeg';
import Set26Image3 from '../assets2/C/2/Major.jpeg';
import Set26Image4 from '../assets2/C/2/Book.jpeg';
import Set26Image5 from '../assets2/C/2/Learning.jpeg';
import Set27Image1 from '../assets2/C/3/C3.jpg';
import Set27Image2 from '../assets2/C/3/Minor.jpg';
import Set27Image3 from '../assets2/C/3/Major.jpeg';
import Set27Image4 from '../assets2/C/3/Book.jpeg';
import Set27Image5 from '../assets2/C/3/Learning.jpeg';
import Set28Image1 from '../assets2/C/4/C4.jpg';
import Set28Image2 from '../assets2/C/4/Minor.jpeg';
import Set28Image3 from '../assets2/C/4/Major.jpg';
import Set28Image4 from '../assets2/C/4/Book.jpeg';
import Set28Image5 from '../assets2/C/4/Learning.jpeg';
import Set29Image1 from '../assets2/C/5/C5.jpg';
import Set29Image2 from '../assets2/C/5/Minor.jpeg';
import Set29Image4 from '../assets2/C/5/Book.jpeg';
import Set29Image5 from '../assets2/C/5/Learning.jpeg';
import Set30Image1 from '../assets2/C/6/C6.jpg';
import Set30Image2 from '../assets2/C/6/Minor.jpeg';
import Set30Image3 from '../assets2/C/6/Major.jpeg';
import Set30Image4 from '../assets2/C/6/Book.jpeg';
import Set30Image5 from '../assets2/C/6/Learning.jpeg';
import Set31Image1 from '../assets2/C/7/C7.jpg';
import Set31Image2 from '../assets2/C/7/Minor.jpeg';
import Set31Image3 from '../assets2/C/7/Major.jpeg';
import Set31Image5 from '../assets2/C/7/Learning.jpeg';
import Set32Image1 from '../assets2/C/8/C8.jpg';
import Set32Image2 from '../assets2/C/8/Minor.jpeg';
import Set32Image3 from '../assets2/C/8/Major.jpeg';
import Set32Image4 from '../assets2/C/8/Book.jpeg';
import Set32Image5 from '../assets2/C/8/Learning.jpeg';
import Set33Image1 from '../assets2/C/9/C9.jpg';
import Set33Image2 from '../assets2/C/9/Minor.jpeg';
import Set33Image3 from '../assets2/C/9/Major.jpeg';
import Set33Image4 from '../assets2/C/9/Book.jpeg';
import Set33Image5 from '../assets2/C/9/Learning.jpg';
import Set34Image1 from '../assets2/C/10/C10.jpg';
import Set34Image2 from '../assets2/C/10/Minor.jpeg';
import Set34Image3 from '../assets2/C/10/Major.jpeg';
import Set34Image4 from '../assets2/C/10/Book.jpeg';
import Set34Image5 from '../assets2/C/10/Learning.jpeg';
import Set35Image1 from '../assets2/C/11/C11.jpg';
import Set35Image2 from '../assets2/C/11/Minor.jpeg';
import Set35Image3 from '../assets2/C/11/Major.jpeg';
import Set35Image4 from '../assets2/C/11/Book.jpeg';
import Set35Image5 from '../assets2/C/11/Learning.jpeg';
import Set36Image1 from '../assets2/C/12/C12.jpg';
import Set36Image2 from '../assets2/C/12/Minor.jpeg';
import Set36Image3 from '../assets2/C/12/Major.jpeg';
import Set36Image4 from '../assets2/C/12/Book.jpeg';
import Set36Image5 from '../assets2/C/12/Learning.jpeg';


//Group D
import Set37Image1 from '../assets2/D/1/Screenshot 2024-07-01 130458.png';
import Set37Image2 from '../assets2/D/1/Minor.jpeg';
import Set37Image3 from '../assets2/D/1/Major.jpeg';
import Set37Image4 from '../assets2/D/1/Book.jpeg';
import Set37Image5 from '../assets2/D/1/Learning.jpeg';
import Set38Image1 from '../assets2/D/2/D2.jpg';
import Set38Image2 from '../assets2/D/2/Minor.jpeg';
import Set38Image3 from '../assets2/D/2/Major.jpeg';
import Set38Image4 from '../assets2/D/2/Book.jpeg';
import Set38Image5 from '../assets2/D/2/Learning.jpeg';
import Set39Image1 from '../assets2/D/3/D3.jpg';
import Set39Image2 from '../assets2/D/3/Minor.jpeg';
import Set39Image3 from '../assets2/D/3/Major.jpeg';
import Set39Image4 from '../assets2/D/3/Book.jpeg';
import Set39Image5 from '../assets2/D/3/Learning.jpeg';
import Set40Image1 from '../assets2/D/4/D4.jpg';
import Set40Image2 from '../assets2/D/4/Minor.jpeg';
import Set40Image3 from '../assets2/D/4/Major.jpeg';
import Set40Image4 from '../assets2/D/4/Book.jpeg';
import Set40Image5 from '../assets2/D/4/Learning.jpeg';
import Set41Image1 from '../assets2/D/5/D5.jpg';
import Set41Image2 from '../assets2/D/5/Minor.jpeg';
import Set41Image3 from '../assets2/D/5/Major.jpeg';
import Set41Image4 from '../assets2/D/5/Book.jpeg';
import Set41Image5 from '../assets2/D/5/Learning.jpeg';
import Set42Image1 from '../assets2/D/6/D6.jpg';
import Set42Image2 from '../assets2/D/6/Minor.jpeg';
import Set42Image3 from '../assets2/D/6/Major.jpeg';
import Set42Image4 from '../assets2/D/6/Book.jpeg';
import Set42Image5 from '../assets2/D/6/Learning.jpeg';
import Set43Image1 from '../assets2/D/7/D7.jpg';
import Set43Image2 from '../assets2/D/7/Minor.jpeg';
import Set43Image3 from '../assets2/D/7/Major.jpeg';
import Set43Image4 from '../assets2/D/7/Book.jpeg';
import Set43Image5 from '../assets2/D/7/Learning.jpeg';
import Set44Image1 from '../assets2/D/8/D8.jpg';
import Set44Image2 from '../assets2/D/8/Minor.jpeg';
import Set44Image3 from '../assets2/D/8/Major.jpeg';
import Set44Image4 from '../assets2/D/8/Book.jpeg';
import Set44Image5 from '../assets2/D/8/Learning.jpeg';
import Set45Image1 from '../assets2/D/9/D9.jpg';
import Set45Image2 from '../assets2/D/9/Minor.jpeg';
import Set45Image4 from '../assets2/D/9/Book.jpeg';
import Set45Image5 from '../assets2/D/9/Learning.jpeg';
import Set46Image1 from '../assets2/D/10/D10.jpg';
import Set46Image2 from '../assets2/D/10/Minor.jpeg';
import Set46Image3 from '../assets2/D/10/Major.jpeg';
import Set46Image4 from '../assets2/D/10/Book.jpeg';
import Set46Image5 from '../assets2/D/10/Learning.jpeg';
import Set47Image1 from '../assets2/D/11/D11.jpg';
import Set47Image2 from '../assets2/D/11/Minor.jpeg';
import Set47Image3 from '../assets2/D/11/Major.jpeg';
import Set47Image4 from '../assets2/D/11/Book.jpeg';
import Set47Image5 from '../assets2/D/11/Learning.jpeg';
import Set48Image1 from '../assets2/D/12/D12.jpg';
import Set48Image2 from '../assets2/D/12/Minor.jpeg';
import Set48Image3 from '../assets2/D/12/Major.jpeg';
import Set48Image4 from '../assets2/D/12/Book.jpeg';
import Set48Image5 from '../assets2/D/12/Learning.jpeg';

//Group E
import Set49Image1 from '../assets2/E/1/E1.jpg';
import Set49Image2 from '../assets2/E/1/Minor.jpeg';
import Set49Image3 from '../assets2/E/1/Major.jpg';
import Set49Image4 from '../assets2/E/1/Book.jpeg';
import Set49Image5 from '../assets2/E/1/Learning.jpg';
import Set50Image1 from '../assets2/E/2/E2.jpg';
import Set50Image2 from '../assets2/E/2/Minor.jpeg';
import Set50Image3 from '../assets2/E/2/Major.jpeg';
import Set50Image4 from '../assets2/E/2/Book.jpeg';
import Set50Image5 from '../assets2/E/2/Learning.jpeg';
import Set51Image1 from '../assets2/E/3/E3.jpg';
import Set51Image2 from '../assets2/E/3/Minor.jpg';
import Set51Image3 from '../assets2/E/3/Major.jpeg';
import Set51Image4 from '../assets2/E/3/Book.jpeg';
import Set52Image1 from '../assets2/E/4/E4.jpg';
import Set52Image2 from '../assets2/E/4/Minor.jpeg';
import Set52Image3 from '../assets2/E/4/Major.jpeg';
import Set52Image4 from '../assets2/E/4/Book.jpeg';
import Set52Image5 from '../assets2/E/4/Learning.jpeg';
import Set53Image1 from '../assets2/E/5/E5.jpg';
import Set53Image2 from '../assets2/E/5/Minor.jpeg';
import Set53Image3 from '../assets2/E/5/Major.jpg';
import Set53Image4 from '../assets2/E/5/Book.jpeg';
import Set53Image5 from '../assets2/E/5/Learning.jpeg';
import Set54Image1 from '../assets2/E/6/E6.jpg';
import Set54Image2 from '../assets2/E/6/Minor.jpeg';
import Set54Image3 from '../assets2/E/6/Major.jpeg';
import Set54Image4 from '../assets2/E/6/Book.jpeg';
import Set54Image5 from '../assets2/E/6/Learning.jpg';
import Set55Image1 from '../assets2/E/7/E7.jpg';
import Set55Image2 from '../assets2/E/7/Minor.jpeg';
import Set55Image3 from '../assets2/E/7/Major.jpeg';
import Set55Image4 from '../assets2/E/7/Book.jpeg';
import Set55Image5 from '../assets2/E/7/Learning.jpg';
import Set56Image1 from '../assets2/E/8/E8.jpg';
import Set56Image2 from '../assets2/E/8/Minor.jpeg';
import Set56Image3 from '../assets2/E/8/Major.jpeg';
import Set56Image5 from '../assets2/E/8/Learning.jpeg';
import Set57Image1 from '../assets2/E/9/E9.jpg';
import Set57Image2 from '../assets2/E/9/Minor.jpeg';
import Set57Image3 from '../assets2/E/9/Major.jpg';
import Set57Image4 from '../assets2/E/9/Book.jpg';
import Set57Image5 from '../assets2/E/9/Learning.jpeg';
import Set58Image1 from '../assets2/E/10/E10.jpg';
import Set58Image2 from '../assets2/E/10/Minor.jpeg';
import Set58Image3 from '../assets2/E/10/Major.jpeg';
import Set58Image4 from '../assets2/E/10/Book.jpg';
import Set58Image5 from '../assets2/E/10/Learning.jpeg';
import Set59Image1 from '../assets2/E/11/E11.jpg';
import Set59Image2 from '../assets2/E/11/Minor.jpeg';
import Set59Image3 from '../assets2/E/11/Major.jpg';
import Set59Image4 from '../assets2/E/11/Book.jpg';
import Set59Image5 from '../assets2/E/11/Learning.jpeg';
import Set60Image1 from '../assets2/E/12/E12.jpg';
import Set60Image2 from '../assets2/E/12/Minor.jpeg';
import Set60Image4 from '../assets2/E/12/Book.jpg';
import Set60Image5 from '../assets2/E/12/Learning.jpeg';


//Group F
import Set61Image1 from '../assets2/F/1/F1.jpg';
import Set61Image2 from '../assets2/F/1/Minor.jpeg';
import Set61Image3 from '../assets2/F/1/Major.jpeg';
import Set61Image4 from '../assets2/F/1/Book.jpeg';
import Set61Image5 from '../assets2/F/1/Book2.jpeg';
import Set61Image6 from '../assets2/F/1/Learning.jpg';
import Set62Image1 from '../assets2/F/2/F2.jpg';
import Set62Image2 from '../assets2/F/2/Minor.jpeg';
import Set62Image3 from '../assets2/F/2/Major.jpeg';
import Set62Image4 from '../assets2/F/2/Book.jpeg';
import Set62Image5 from '../assets2/F/2/Book2.jpeg';
import Set62Image6 from '../assets2/F/2/Learning.jpg';
import Set63Image1 from '../assets2/F/3/F3.jpg';
import Set63Image2 from '../assets2/F/3/Minor.jpeg';
import Set63Image3 from '../assets2/F/3/Major.jpeg';
import Set63Image4 from '../assets2/F/3/Book.jpeg';
import Set63Image5 from '../assets2/F/3/Book2.jpeg';
import Set63Image6 from '../assets2/F/3/Learning.jpeg';
import Set64Image1 from '../assets2/F/4/F4.png';
import Set64Image2 from '../assets2/F/4/Minor.jpg';
import Set64Image3 from '../assets2/F/4/Major.jpeg';
import Set64Image4 from '../assets2/F/4/Book.jpeg';
import Set64Image5 from '../assets2/F/4/Book2.jpeg';
import Set64Image6 from '../assets2/F/4/Learning.jpeg';
import Set65Image1 from '../assets2/F/5/F5.jpg';
import Set65Image2 from '../assets2/F/5/Minor.jpg';
import Set65Image3 from '../assets2/F/5/Major.jpeg';
import Set65Image4 from '../assets2/F/5/Book.jpeg';
import Set65Image5 from '../assets2/F/5/Book2.jpeg';
import Set65Image6 from '../assets2/F/5/Learning.jpeg';
import Set66Image1 from '../assets2/F/6/F6.jpg';
import Set66Image2 from '../assets2/F/6/Minor.jpg';
import Set66Image3 from '../assets2/F/6/Major.jpeg';
import Set66Image4 from '../assets2/F/6/Book.jpeg';
import Set66Image5 from '../assets2/F/6/Book2.jpeg';
import Set66Image6 from '../assets2/F/6/Learning.jpeg';
import Set67Image1 from '../assets2/F/7/F7.jpg';
import Set67Image2 from '../assets2/F/7/Minor.jpg';
import Set67Image3 from '../assets2/F/7/Major.jpeg';
import Set67Image4 from '../assets2/F/7/Book.jpeg';
import Set67Image5 from '../assets2/F/7/Book2.jpeg';
import Set67Image6 from '../assets2/F/7/Learning.jpeg';
import Set68Image1 from '../assets2/F/8/F8.jpg';
import Set68Image2 from '../assets2/F/8/Minor.jpg';
import Set68Image3 from '../assets2/F/8/Major.jpeg';
import Set68Image4 from '../assets2/F/8/Book.jpeg';
import Set68Image5 from '../assets2/F/8/Book2.jpeg';    
import Set68Image6 from '../assets2/F/8/Learning.jpeg';
import Set69Image1 from '../assets2/F/9/F9.jpg';
import Set69Image2 from '../assets2/F/9/Minor.jpg';
import Set69Image3 from '../assets2/F/9/Major.jpeg';
import Set69Image4 from '../assets2/F/9/Book.jpeg';
import Set69Image5 from '../assets2/F/9/Book2.jpeg';
import Set69Image6 from '../assets2/F/9/Learning.jpeg';
import Set70Image1 from '../assets2/F/10/F10.jpg';
import Set70Image2 from '../assets2/F/10/Minor.jpeg';
import Set70Image3 from '../assets2/F/10/Major.jpeg';
import Set70Image4 from '../assets2/F/10/Book.jpeg';
import Set70Image5 from '../assets2/F/10/Book2.jpeg';
import Set70Image6 from '../assets2/F/10/Learning.jpeg';
import Set71Image1 from '../assets2/F/11/F11.jpg';
import Set71Image3 from '../assets2/F/11/Major.jpeg';
import Set71Image4 from '../assets2/F/11/Book.jpeg';
import Set71Image5 from '../assets2/F/11/Book2.jpeg';
import Set71Image6 from '../assets2/F/11/Learning.jpeg';
import Set72Image1 from '../assets2/F/12/F12.jpg';
import Set72Image2 from '../assets2/F/12/Minor.jpeg';
import Set72Image3 from '../assets2/F/12/Major.jpeg';
import Set72Image4 from '../assets2/F/12/Book.jpeg';
import Set72Image5 from '../assets2/F/12/Book2.jpeg';
import Set72Image6 from '../assets2/F/12/Learning.jpeg';


// Group G
import Set73Image1 from '../assets2/G/1/G1.jpg';
import Set73Image2 from '../assets2/G/1/Minor.jpg';
import Set73Image3 from '../assets2/G/1/Major.jpeg';
import Set73Image4 from '../assets2/G/1/Book.jpeg';
import Set73Image5 from '../assets2/G/1/Learning.jpg';
import Set74Image1 from '../assets2/G/2/G2.jpg';
import Set74Image2 from '../assets2/G/2/Minor.jpg';
import Set74Image3 from '../assets2/G/2/Major.jpeg';
import Set74Image4 from '../assets2/G/2/Book.jpeg';
import Set74Image5 from '../assets2/G/2/Learning.jpg';
import Set75Image1 from '../assets2/G/3/G3.jpg';
import Set75Image2 from '../assets2/G/3/Minor.jpg';
import Set75Image3 from '../assets2/G/3/Major.jpeg';
import Set75Image4 from '../assets2/G/3/Book.jpeg';
import Set75Image5 from '../assets2/G/3/Learning.jpg';
import Set76Image1 from '../assets2/G/4/G4.png';
import Set76Image2 from '../assets2/G/4/Minor.jpg';
import Set76Image3 from '../assets2/G/4/Major.jpeg';
import Set76Image4 from '../assets2/G/4/Book.jpeg';
import Set76Image5 from '../assets2/G/4/Learning.jpg';
import Set77Image1 from '../assets2/G/5/G5.jpg';
import Set77Image2 from '../assets2/G/5/Minor.jpeg';
import Set77Image3 from '../assets2/G/5/Major.jpeg';
import Set77Image4 from '../assets2/G/5/Book.jpeg';
import Set77Image5 from '../assets2/G/5/Learning.jpg';
import Set78Image1 from '../assets2/G/6/G6.jpg';
import Set78Image2 from '../assets2/G/6/Minor.jpeg';
import Set78Image3 from '../assets2/G/6/Major.jpeg';
import Set78Image4 from '../assets2/G/6/Book.jpeg';
import Set78Image5 from '../assets2/G/6/Learning.jpg';
import Set79Image1 from '../assets2/G/7/G7.jpg';
import Set79Image2 from '../assets2/G/7/Minor.jpeg';
import Set79Image3 from '../assets2/G/7/Major.jpeg';
import Set79Image4 from '../assets2/G/7/Book.jpeg';
import Set79Image5 from '../assets2/G/7/Learning.jpeg';
import Set80Image1 from '../assets2/G/8/G8.jpg';
import Set80Image2 from '../assets2/G/8/Minor.jpeg';
import Set80Image3 from '../assets2/G/8/Major.jpeg';
import Set80Image4 from '../assets2/G/8/Book.jpeg';
import Set80Image5 from '../assets2/G/8/Learning.jpeg';
import Set81Image1 from '../assets2/G/9/G9.jpg';
import Set81Image2 from '../assets2/G/9/Minor.jpeg';
import Set81Image4 from '../assets2/G/9/Book.jpeg';
import Set81Image5 from '../assets2/G/9/Learning.jpeg';
import Set82Image1 from '../assets2/G/10/G10.jpg';
import Set82Image2 from '../assets2/G/10/Minor.jpeg';
import Set82Image3 from '../assets2/G/10/Major.jpeg';
import Set82Image4 from '../assets2/G/10/Book.jpeg';
import Set82Image5 from '../assets2/G/10/Learning.jpeg';
import Set83Image1 from '../assets2/G/11/G11.jpg';
import Set83Image2 from '../assets2/G/11/Minor.jpg';
import Set83Image3 from '../assets2/G/11/Major.jpeg';
import Set83Image4 from '../assets2/G/11/Book.jpeg';
import Set83Image5 from '../assets2/G/11/Learning.jpeg';
import Set84Image1 from '../assets2/G/12/G12.jpg';
import Set84Image2 from '../assets2/G/12/Minor.jpg';
import Set84Image3 from '../assets2/G/12/Major.jpeg';
import Set84Image4 from '../assets2/G/12/Book.jpeg';

import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';



function ToysDetail({imageIndex: propImageIndex }) {
    const { imageIndex: routeImageIndex } = useParams();
    const imageIndex = propImageIndex !== undefined ? propImageIndex : routeImageIndex;
    const [zoomedUrl, setZoomedUrl] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
  
    // Define your sets of images
    const imageSets = [
        //Group A
      [Set1Image1, Set1Image2, Set1Image3, Set1Image4, Set1Image5], // Set 1
      [Set2Image1, Set2Image2, Set2Image3, Set2Image4, Set2Image5], // Set 2
      [Set3Image1, Set3Image2, Set3Image3, Set3Image4, Set3Image5], // Set 3
      [Set4Image1, Set4Image2, Set4Image3, Set4Image4], // Set 4
      [Set5Image1, Set5Image2, Set5Image3, Set5Image4, Set5Image5], // Set 5
      [Set6Image1, Set6Image2, Set6Image3, Set6Image4, Set6Image5], // Set 6
      [Set7Image1, Set7Image2, Set7Image4, Set7Image5], // Set 7
      [Set8Image1, Set8Image2, Set8Image3, Set8Image4, Set8Image5], // Set 8
      [Set9Image1, Set9Image2, Set9Image3, Set9Image4, Set9Image5], // Set 9
      [Set10Image1, Set10Image2, Set10Image3, Set10Image4, Set10Image5], // Set 10
      [Set11Image1, Set11Image2, Set11Image3, Set11Image4, Set11Image5], // Set 11
      [Set12Image1, Set12Image3, Set12Image4, Set12Image5], // Set 12

       //Group B
       [Set13Image1, Set13Image2, Set13Image3, Set13Image4, Set13Image5], //Set 13
       [Set14Image1, Set14Image2, Set14Image3, Set14Image4, Set14Image5], //Set 14
       [Set15Image1, Set15Image2, Set15Image4, Set15Image5], //Set 15
       [Set16Image1, Set16Image2, Set16Image3, Set16Image4, Set16Image5], //Set 16
       [Set17Image1, Set17Image2, Set17Image3, Set17Image4, Set17Image5], //Set 17
       [Set18Image1, Set18Image2, Set18Image3, Set18Image4, Set18Image5], //Set 18
       [Set19Image1, Set19Image2, Set19Image3, Set19Image5], //Set 19
       [Set20Image1, Set20Image2, Set20Image3, Set20Image4, Set20Image5], //Set 20
       [Set21Image1, Set21Image2, Set21Image4, Set21Image5], //Set 21
       [Set22Image1, Set22Image2, Set22Image3, Set22Image4, Set22Image5], //Set 22
       [Set23Image1, Set23Image2, Set23Image3, Set23Image4], //Set 23
       [Set24Image1, Set24Image2, Set24Image3, Set24Image4, Set24Image5], //Set 24

       //Group C
       [Set25Image1, Set25Image2, Set25Image3, Set25Image4, Set25Image5], //Set 25
       [Set26Image1, Set26Image2, Set26Image3, Set26Image4, Set26Image5], //Set 26
       [Set27Image1, Set27Image2, Set27Image3, Set27Image4, Set27Image5], //Set 27
       [Set28Image1, Set28Image2, Set28Image3, Set28Image4, Set28Image5], //Set 28
       [Set29Image1, Set29Image2, Set29Image4, Set29Image5], //Set 29
       [Set30Image1, Set30Image2, Set30Image3, Set30Image4, Set30Image5], //Set 30
       [Set31Image1, Set31Image2, Set31Image3, Set31Image5], //Set 31
       [Set32Image1, Set32Image2, Set32Image3, Set32Image4, Set32Image5], //Set 32
       [Set33Image1, Set33Image2, Set33Image3, Set33Image4, Set33Image5], //Set 33
       [Set34Image1, Set34Image2, Set34Image3, Set34Image4, Set34Image5], //Set 34
       [Set35Image1, Set35Image2, Set35Image3, Set35Image4, Set35Image5], //Set 35
       [Set36Image1, Set36Image2, Set36Image3, Set36Image4, Set36Image5], //Set 36

       //Group D
       [Set37Image1, Set37Image2, Set37Image3, Set37Image4, Set37Image5], //Set 37
       [Set38Image1, Set38Image2, Set38Image3, Set38Image4, Set38Image5], //Set 38
       [Set39Image1, Set39Image2, Set39Image3, Set39Image4, Set39Image5], //Set 39
       [Set40Image1, Set40Image2, Set40Image3, Set40Image4, Set40Image5], //Set 40
       [Set41Image1, Set41Image2, Set41Image3, Set41Image4, Set41Image5], //Set 41
       [Set42Image1, Set42Image2, Set42Image3, Set42Image4, Set42Image5], //Set 42
       [Set43Image1, Set43Image2, Set43Image3, Set43Image4, Set43Image5], //Set 43
       [Set44Image1, Set44Image2, Set44Image3, Set44Image4, Set44Image5], //Set 44
       [Set45Image1, Set45Image2, Set45Image4, Set45Image5], //Set 45
       [Set46Image1, Set46Image2, Set46Image3, Set46Image4, Set46Image5], //Set 46
       [Set47Image1, Set47Image2, Set47Image3, Set47Image4, Set47Image5], //Set 47
       [Set48Image1, Set48Image2, Set48Image3, Set48Image4, Set48Image5], //Set 48


       //Group E
    //    [Set49Image1, Set49Image2, Set49Image3, Set49Image4, Set49Image5] //Set 49
    //    [Set50Image1, Set50Image2, Set50Image3, Set50Image4, Set50Image5] //Set 50
    //    [Set51Image1, Set51Image2, Set51Image3, Set51Image4] //Set 51
    //    [Set52Image1, Set52Image2, Set52Image3, Set52Image4, Set52Image5] //Set 52
    //    [Set53Image1, Set53Image2, Set53Image3, Set53Image4, Set53Image5] //Set 53
    //    [Set54Image1, Set54Image2, Set54Image3, Set54Image4, Set54Image5] //Set 54
    //    [Set55Image1, Set55Image2, Set55Image3, Set55Image4, Set55Image5] //Set 55
    //    [Set56Image1, Set56Image2, Set56Image3, Set56Image5] //Set 56
    //    [Set57Image1, Set57Image2, Set57Image3, Set57Image4, Set57Image5] //Set 57
    //    [Set58Image1, Set58Image2, Set58Image3, Set58Image4, Set58Image5] //Set 58
    //    [Set59Image1, Set59Image2, Set59Image3, Set59Image4, Set59Image5] //Set 59
    //    [Set60Image1, Set60Image2, Set60Image4, Set60Image5] //Set 60

    //    //Group F
    //    [Set61Image1, Set61Image2, Set61Image3, Set61Image4, Set61Image5, Set61Image6] //Set 61
    //    [Set62Image1, Set62Image2, Set62Image3, Set62Image4, Set62Image5, Set62Image6] //Set 62
    //    [Set63Image1, Set63Image2, Set63Image3, Set63Image4, Set63Image5, Set63Image6] //Set 63
    //    [Set64Image1, Set64Image2, Set64Image3, Set64Image4, Set64Image5, Set64Image6] //Set 64
    //    [Set65Image1, Set65Image2, Set65Image3, Set65Image4, Set65Image5, Set65Image6] //Set 65
    //    [Set66Image1, Set66Image2, Set66Image3, Set66Image4, Set66Image5, Set66Image6] //Set 66
    //    [Set67Image1, Set67Image2, Set67Image3, Set67Image4, Set67Image5, Set67Image6] //Set 67
    //    [Set68Image1, Set68Image2, Set68Image3, Set68Image4, Set68Image5, Set68Image6] //Set 68
    //    [Set69Image1, Set69Image2, Set69Image3, Set69Image4, Set69Image5, Set69Image6] //Set 69
    //    [Set70Image1, Set70Image2, Set70Image3, Set70Image4, Set70Image5, Set70Image6] //Set 70
    //    [Set71Image1, Set71Image3, Set71Image4, Set71Image5, Set71Image6] //Set 71
    //    [Set72Image1, Set72Image2, Set72Image3, Set72Image4, Set72Image5, Set72Image6] //Set 72



    //    //Group G
    //    [Set73Image1, Set73Image2, Set73Image3, Set73Image4, Set73Image5] //Set 73
    //    [Set74Image1, Set74Image2, Set74Image3, Set74Image4, Set74Image5] //Set 74
    //    [Set75Image1, Set75Image2, Set75Image3, Set75Image4, Set75Image5] //Set 75
    //    [Set76Image1, Set76Image2, Set76Image3, Set76Image4, Set76Image5] //Set 76
    //    [Set77Image1, Set77Image2, Set77Image3, Set77Image4, Set77Image5] //Set 77
    //    [Set78Image1, Set78Image2, Set78Image3, Set78Image4, Set78Image5] //Set 78
    //    [Set79Image1, Set79Image2, Set79Image3, Set79Image4, Set79Image5] //Set 79
    //    [Set80Image1, Set80Image2, Set80Image3, Set80Image4, Set80Image5] //Set 80
    //    [Set81Image1, Set81Image2, Set81Image4, Set81Image5] //Set 81
    //    [Set82Image1, Set82Image2, Set82Image3, Set82Image4, Set82Image5] //Set 82
    //    [Set83Image1, Set83Image2, Set83Image3, Set83Image4, Set83Image5] //Set 83
    //    [Set84Image1, Set84Image2, Set84Image3, Set84Image4] //Set 84



        


      // Add more sets as needed
    ];
  
    
 
 // Convert imageIndex to a number and validate it
 const index = parseInt(imageIndex, 10);
 const isValidIndex = !isNaN(index) && index >= 0 && index < imageSets.length;

 useEffect(() => {
   if (isValidIndex) {
     setSelectedImage(0);
     setZoomedUrl(imageSets[index][0]);
   }
 }, [index, isValidIndex, imageSets]);

 const handleImageClick = (idx) => {
   if (isValidIndex) {
     setZoomedUrl(imageSets[index][idx]);
     setSelectedImage(idx);
   }
 };

 if (!isValidIndex) {
   console.error(`Invalid image index: ${imageIndex}`);
   return <div>Invalid image index</div>;
 }

  
    return (
        <div>
          {/* <MyNavbar /> */}
          {/* <Grid container className="pt-4" style={{ backgroundColor: '#FFF8BD' }}>
            <Grid item container xs={3} md={3} justifyContent="center" alignItems="center">
              <img src="/assets/image 25.png" style={{ height: '160px' }} />
            </Grid>
            <Grid item container xs={6} md={6} justifyContent="center" alignItems="center">
              <div className="text-center">
                <h4 style={{ fontSize: '2.1rem', color: '#4A66C9', fontWeight: '600' }}>Unlock a World of Play!</h4>
                <p style={{ fontSize: '2.6rem', color: '#000', fontWeight: '500' }}>Explore, Learn, and Grow with Our <br /> Curated Toy Collection.</p>
              </div>
            </Grid>
            <Grid item container xs={3} md={3} justifyContent="center" alignItems="center">
              <img src="/assets/image 26.png" style={{ height: '160px' }} />
            </Grid>
          </Grid>
     */}
          <div className="container-fluid">
            <Grid container justifyContent="center" alignItems="center"  style={{ backgroundColor: '#C4E6FF', borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
              <Grid item container xs={12} md={5} justifyContent="center" alignItems="center">
                <Grid item container xs={2} spacing={1}>
                  {imageSets[index].map((imageUrl, idx) => (
                    <img
                      key={idx}
                      src={imageUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      style={{
                        height: '100px',
                        cursor: 'pointer',
                        filter: selectedImage === idx ? 'brightness(30%)' : 'none',
                        padding: '5px',
                      }}
                      onClick={() => handleImageClick(idx)}
                    />
                  ))}
                </Grid>
    
                <Grid item xs={10}>
                  <Paper elevation={3} style={{ padding: 20 }}>
                    {zoomedUrl ? (
                      <img
                        src={zoomedUrl}
                        alt="Zoomed Image"
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxHeight: '400px',
                          objectFit: 'contain',
                        }}
                      />
                    ) : (
                      <div>No image selected</div>
                    )}
                  </Paper>
                </Grid>
              </Grid>
    
              <Grid item container xs={12} md={5} mx={2} justifyContent="center" alignItems="center">
                <Grid container style={{ backgroundColor: '#FFF', height: '435px', padding: '20px' }}>
                  <Grid item container xs={12} md={12}>
                    <img src='/assets/Group 23.png' alt='' style={{ height: '50px' }} />
                  </Grid>
                  <Grid item container xs={12} md={12} style={{ paddingTop: '10px' }}>
                    <h1>Product Title</h1>
                  </Grid>
                  <Grid item container xs={12} md={12}>
                    <ul>
                      <li>Product Description</li>
                      <li style={{ paddingTop: '5px' }}>Product Description</li>
                      <li style={{ paddingTop: '5px' }}>Product Description</li>
                      <li style={{ paddingTop: '5px' }}>Product Description</li>
                    </ul>
                  </Grid>
                  <Grid item container xs={12} md={12} justifyContent="center" alignItems="center">
                    <Button variant="contained" fullWidth sx={{ backgroundColor: '#738DE7', color: '#FFF', fontWeight: '600' }}>
                      Book Now
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
           
          </div>
        </div>
    )
}

export default ToysDetail;