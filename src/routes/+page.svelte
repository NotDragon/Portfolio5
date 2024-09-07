<script lang="ts">
	import Image from "$lib/Image.svelte";
	import ImageContainer from "$lib/ImageContainer.svelte";
	import Fa from 'svelte-fa';
	import { faPython, faJava, faJs, faHtml5, faRust, faReact, faVuejs, faUnity, faGoogle, faNpm, faDocker, faGitAlt, faFlutter, faGolang } from '@fortawesome/free-brands-svg-icons/index';
	import { faHashtag, faGears, faC, faS, faU, faR, faG, faL, faFire, faDatabase, faLeaf, faCodeBranch, faFileCode, faAtom, faRocket, faStore, faMicrochip, faX, faServer, faRadio, faV } from '@fortawesome/free-solid-svg-icons/index'
	import Grid from "$lib/Grid.svelte";
	import Panel from "$lib/Panel.svelte";
	import { goto } from '$app/navigation';
	import { redirect } from "@sveltejs/kit";

</script>

<main>
	<ImageContainer>
		<Image title="About"
			   src="https://images.unsplash.com/photo-1629177023540-619f8e2412f1?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			   id="about">
			   	<h3>Introduction</h3>
				<p>
					Hello! I'm Michalis Chatzittofi, a student passionate about programming and STEM. I love solving and identifying complex problems through code and turning innovative ideas into reality. From a very young age, I was fascinated with anything to do with science and electronics. As a child I would frequently take apart electrical appliances, components and modules, to learn how they work on the inside, and ultimately try to reassemble it. 
				</p>
				<p>
					When I learned how computers work, I became obsessed with them. Specifically, I became very interested in creating something out of nothing. Computers gave me the ability to manifest my imaginations into reality in a world of no limits. I started of making basic games in software such as Scratch and soon moved on to my first “real” programming language, C++. Since then, I have learned how to use countless tools in a myriad of different programming languages. 
				</p>
				<p>
					What excites me most about this field is the constant evolution of technology. No matter how much time I dedicate to learning, there will always be new challenges and discoveries waiting. While this might seem overwhelming to some, to me, it represents endless opportunities to grow—not just as a programmer, but also as a problem solver and critical thinker.
				</p><br>

				<h3>Skills</h3>
				<h4 style="padding-left: 1vw;"><u>Languages</u></h4>
				<ul style="font-size: 1.125rem;">
					<span><Fa icon={faC}/> C/C++</span><br>
					<span><Fa icon={faHashtag}/> C#</span><br>
					<span><Fa icon={faHtml5}/> HTML/CSS</span><br>
					<span><Fa icon={faJs}/> JavaScript</span><br>
					<span><Fa icon={faGears}/> TypeScript</span><br>
					<span><Fa icon={faRust}/> Rust</span><br>
					<span><Fa icon={faPython}/> Python</span><br>
					<span><Fa icon={faJava}/> Java</span><br>
				</ul>


				<h4 style="padding-left: 1vw;"><u>Frameworks/Libraries</u></h4>
				<h5 style="padding-left: 1.5vw;"><u>Web Development</u></h5>
				<ul style="font-size: 1.125rem;">
					<span><Fa icon={faS}/> Svelte</span><br>
					<span><Fa icon={faReact}/> React</span><br>
					<span><Fa icon={faVuejs}/> VueJS</span><br>
				</ul>
				<h5 style="padding-left: 1.5vw;"><u>App/Desktop Development</u></h5>
				<ul style="font-size: 1.125rem;">
					<span><Fa icon={faJs}/> Electron</span><br>
					<span><Fa icon={faRust}/> Tauri</span><br>
					<span><Fa icon={faC}/> Qt</span><br>
				</ul>
				<h5 style="padding-left: 1.5vw;"><u>Game Development</u></h5>
				<ul style="font-size: 1.125rem;">
					<span><Fa icon={faRocket}/> Raylib</span><br>
					<span><Fa icon={faUnity}/> Unity</span><br>
					<span><Fa icon={faAtom}/> Unreal</span><br>
					<span><Fa icon={faG}/><Fa icon={faL}/> OpenGL</span><br>
				</ul>
				<h5 style="padding-left: 1.5vw;"><u>Other</u></h5>
				<ul style="font-size: 1.125rem;">
					<span><Fa icon={faPython}/> Panda</span><br>
					<span><Fa icon={faC}/> Boost</span><br>
					<span><Fa icon={faGoogle}/> GTest</span><br>
				</ul>

				<h4 style="padding-left: 1vw;"><u>Technologies/Tools</u></h4>
				<ul style="font-size: 1.125rem;">
					<span><Fa icon={faC}/> CMake</span><br>
					<span><Fa icon={faFire}/> Firebase</span><br>
					<span><Fa icon={faNpm}/> NPM</span><br>
					<span><Fa icon={faDocker}/> Docker</span><br>
					<span><Fa icon={faStore}/> SQLite</span><br>
					<span><Fa icon={faDatabase}/> PostgreSQL</span><br>
					<span><Fa icon={faLeaf}/> MongoDB</span><br>
					<span><Fa icon={faCodeBranch}/> GDB</span><br>
					<span><Fa icon={faFileCode}/> JSON</span><br>
					<span><Fa icon={faGitAlt}/> Git</span><br>
					<span><Fa icon={faMicrochip}/> IoT</span><br>
				</ul>
		</Image>

		<Image title="STEM"
			   src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
			   id="stem">
				<h3>What Does STEM Mean?</h3>
				<p>
					STEM stands for Science, Technology, Engineering, and Mathematics. It encompasses an interdisciplinary approach to education that encourages critical thinking, problem-solving, and innovation. By focusing on these fields, STEM allows us to identify problems, and create innovative solutions, or further out understanding of a field.
				</p><br>

				<h3>My Work</h3>
				<p>
					Research is the backbone of STEM, driving our understanding of the world and fostering innovation. However, an often-overlooked aspect of STEM is incorporating public opinion. Much of my work involves surveys and data analysis to support and enhance my research.
				</p><br>

				<h3>Some Examples</h3>
				<Grid>
					<Panel onclick={() => { goto('/AI') }} src="https://images.unsplash.com/photo-1637715863105-83fe44b5992f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>AI</h4>
						<p>
							In 2020 AI gained massive popularity and became one of the biggest and most impactful things of this century. It revolutionized many industries and flipped the table upside down. While not a new concept at the time, it’s boom in popularity and clout meant that every company scrambled to introduce their own AI. I created a survey that aims to give me an insight to peoples view on this new tool. I also participated in a debate where 2 side argued over its place and role. One side aiming to limit its usage, while the other encouraged its implementation in more industries
						</p>
					</Panel>

					<Panel onclick={() => { goto('/5G') }} src="https://images.unsplash.com/photo-1614157561595-dc25d28cfa85?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>5G</h4>
						<p>
							When 5G first released, many concerns were raised concerning its safety. Me along with a team of other students at StemFreak conducted a large-scale survey on people’s opinion on 5G
						</p>
					</Panel>

					<Panel onclick={() => { goto('/Climate') }} src="https://images.unsplash.com/photo-1514125669375-59ee3985d08b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>Climate</h4>
						<p>
							Climate change is one of the most pressing issues in our society. It is a constantly looming threat that, if ignored, has the potential to reverse thousands of years’ worth of progress. I have spent a big portion of the last few years researching climate change, and its effects long term. That being said, climate change can have smaller effects on the world, that can be unnoticeable, and often fly under the radar. One such example is the effect on plants that require specific climate conditions to be prosperous. The coco-tree is one of those plants, which is why I decided to study it on its own. 
						</p>
					</Panel>

					<Panel onclick={() => { goto('/Genetics') }} src="https://images.unsplash.com/photo-1641903202531-bfa6bf0c6419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80">
						<h4>Genetics</h4>
						<p>
							By far, one of the least understood parts of the human body is DNA. This is the reason that so much misinformation is spread around the internet. I conducted extensive research into DNA, and genetics to understand them. I also created a survey that aims to see, which misconceptions about genetics are widely believed as true
						</p>
					</Panel>

					<Panel onclick={() => { goto('/Cars') }} src="https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>Green Cars and Sustainability</h4>
						<p>
							As the shift towards sustainability accelerates, green cars have gained considerable attention as a key solution to reducing carbon emissions. To explore public perception of these eco-friendly vehicles, I, along with a group of peers at StemFreak, conducted an extensive survey on the adoption of green cars.
						</p>
					</Panel>

					<Panel onclick={() => { goto('/Debates') }} src="https://images.unsplash.com/photo-1607778102165-6a418ee9adf2?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>Debates</h4>
						<p>
							One of my favourite things to do is debate on a topic. Debating is certainly a skill that is very hard to master. It requires a combination of well-structured arguments, as well as being ready for what your opponent might through at you and being able to counter it. There is something thrilling about catching your opponent off guard by troughing a curve ball at them or cornering them by using their own arguments
						</p>
					</Panel>

					<Panel onclick={() => { window.open('https://drive.google.com/drive/folders/1D6DCljTg-ZKKD7OlI2VyN4SL4jLt71WX?usp=sharing', "_blank") }}>
						<h4>More Presentation</h4>
						<p>I have created hundreds of presentations. I have compiled a few in a folder for you to read, if you are interested (Some of these presentations are old, and do not meet the standard of my current work, but still cover interesting concepts)</p>
					</Panel>

				</Grid>
		</Image>
		
		<Image title="Programing"
			   src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			   id="programing">
				<h3>Why I Love Programming</h3>
			   	<p>
					I have been programming for many years now. To me, a computer is an empty canvas, and programming is my brush. I can create things that I never thought were possible, and truly, the sky’s the limit. If you told me, when I got started, that I was going to be able to train AIs to make play games and talk like humans, I would have laughed. Over the past years I have mastered C++ which allows me to create, fast and complicated programs, for anything I can think of. I have also learned languages like C# to be able to use with Unity, or JavaScript for web development and many other. I have build countless programs, and here are some of my favourite 
				</p>

				<Grid>
					<Panel onclick={() => { window.open('https://github.com/NotDragon/Inertia', "_blank") }} src="https://images.unsplash.com/photo-1615525137689-198778541af6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>Inertia</h4>
						<p>
							Inertia is a programming language that aims to simply app development, by specialising in UI design. It is a huge project that is still a work in progress. Currently it is being built with C++ and OpenGL for graphics, and due to the projects scale, will not be available soon. That being said, I have made accessible an early prototype that works using JavaScript, HTML and CSS. You can experiment with it by making moderately complicated websites.
						</p>
					</Panel>
					
					<Panel onclick={() => { window.open('https://github.com/NotDragon/Endure', "_blank") }} src="/Endure.png">
						<h4>Endure</h4>
						<p>
							Endure is a game about a character going through an adventure, trying to find freedom. Without going into much detail, he leaves in a cave that has been the home of humanity for many years, yet he believes that there is more in life then just a cave. Endure is another big that require a lot more work to be completed. It is being build purely with C++ and no engine, only using Raylib. I have made a very early version available that includes the basics of my “engine”. It is able to load maps off JSON files making map creating easy, and has basic game mechanics as well as saving and loading. 
						</p>
					</Panel>
					
					<Panel onclick={() => { window.open('https://github.com/NotDragon/MySolarSystem', "_blank") }} src="/MySolarSystem.png">
						<h4>My Solar System</h4>
						<p>
							Currently this app is my previous portfolio. It is hosted at solarsystem.chatzittofi.com. Since I have migrated portfolios though, I will be turning the website into a learning tool. It will become an interactive way for young children to see and learn about planets, in a 3D way
						</p>
					</Panel>

					<Panel onclick={() => { window.open('https://github.com/NotDragon/CDev1', "_blank") }} src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>CDev</h4>
						<p>
							CDev is a custom programming language I developed, built on C#. It served as my introduction to language design, offering a streamlined and accessible experience. To simplify the process of lexical analysis and tokenization, I utilized ANTLR4, a powerful tool that handles these tasks efficiently. This project not only deepened my understanding of programming languages but also honed my skills in C# and language development tools.
						</p>
					</Panel>

					<Panel onclick={() => { window.open('https://github.com/NotDragon/CScript', "_blank") }} src="/CScript.png">
						<h4>CScript</h4>
						<p>
							CScript is a parsing tool designed to simplify programming Arduino boards. It enables users to create code using intuitive block-based visual programming, which is then automatically translated into C++. This tool is specifically crafted to make teaching and learning Arduino more engaging and to minimize the complexity of C++ programming. By abstracting away the technical details, CScript makes the Arduino experience more accessible and enjoyable, especially for beginners.
						</p>
					</Panel>

					<Panel onclick={() => { window.open('https://github.com/NotDragon/FurEliseCpp', "_blank") }} src="https://images.unsplash.com/photo-1633779366066-18cd2cf595b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>Fur Elise in C++</h4>
						<p>
							This is a fun program I created that plays Für Elise entirely using C++. It's a creative project that combines music and programming, showcasing how C++ can be used in unique and enjoyable ways beyond typical applications. It's a playful demonstration of code as art, turning a classic melody into a C++ experience.
						</p>
					</Panel>

					<Panel onclick={() => { window.open('https://github.com/NotDragon/Pong', "_blank") }} src="/Pong.png">
						<h4>Pong</h4>
						<p>
							Pong is one of the simplest games to create, involving a ball and two paddles. Due to its simplicity, many programmers, including myself, use Pong as a way to test game or graphics libraries. In this project, I used Pong to explore and understand the basics of Raylib, a simple and easy-to-use game library. This project allowed me to gain hands-on experience with Raylib and solidify my understanding of game development fundamentals.
						</p>
					</Panel>

					<Panel onclick={() => { window.open('https://github.com/NotDragon/2sumchallenge', "_blank") }} src="https://images.unsplash.com/photo-1580894328141-6f3421a182a8?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>2 Sum Challenge</h4>
						<p>
							As a programmer, it's important to challenge yourself regularly. There are many websites that offer coding challenges to help sharpen your skills. I've completed countless challenges, one of which is the 2 Sum problem. The challenge is described as follows:
							"Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target."
						</p>
					</Panel>

					<Panel onclick={() => { window.open('https://github.com/NotDragon/Passsound', "_blank") }} src="https://images.unsplash.com/photo-1686519093104-3140c6dcf284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
						<h4>Passsound</h4>
						<p>
							Passsound is technically an encryption tool. What makes it special, is that, instead of it encrypting you input into text, it turns it to sound.
						</p>
					</Panel>

					<Panel onclick={() => { window.open('https://github.com/NotDragon/Editor', "_blank") }} src="/Editor.png">
						<h4>Editor</h4>
						<p>
							This is a simple Code Editor designed for JavaScript, TypeScript, HTML, and CSS. It allows users to open, close, save, and create files with ease. I'm planning to expand its functionality by adding support for additional languages and tools, such as C++, Python, and CMake. Future updates will also include a built-in "Build/Run" button to streamline the process of compiling and running programs, making development quicker and more efficient.
						</p>
					</Panel>

				</Grid>
		</Image>

		<Image title="Engineering"
			   src="https://images.unsplash.com/photo-1598543785796-37dc6289a018?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			   id="engineering">
			   	<h3>Electrical Circuits and Automation</h3>
				<p>
					I thoroughly enjoy spending time designing and testing electrical circuits. While the process can be intricate and challenging, I find it incredibly rewarding to see my designs come to life. There's a unique satisfaction in automating everyday tasks by connecting a few wires with components and watching the system work seamlessly. To facilitate this, I often use the Arduino Uno and ESP32 boards. The Arduino Uno is perfect for a wide range of projects due to its simplicity and versatility, while the ESP32 offers advanced features like Wi-Fi and Bluetooth connectivity, making it ideal for more complex and connected applications. For even more demanding tasks that require substantial processing power or additional capabilities, I rely on the Raspberry Pi. Its ability to handle more intensive processes and run a variety of software makes it an invaluable tool for my more ambitious projects. Each of these platforms—Arduino Uno, ESP32, and Raspberry Pi—plays a crucial role in my work, helping me to explore new possibilities, solve problems, and create innovative solutions. Whether I’m building a simple automation system or a sophisticated IoT application, these tools are central to my process and success. I have build several projects doing just that, herre is one example
				</p>
				<Panel>
					<h4>Automatic Farm</h4>
					<p>This is a smart farm that automates growing plants. It waters them automatically, as well as taking several messurements to ensure that the plants are healthy. It alos can comunicate with a computer to give you more information</p>
				</Panel>
		</Image>

		<Image title="Industry Projects"
			   src="https://images.unsplash.com/photo-1536972795217-00f0b4587844?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			   id="industry">
				<h3>Internal Managment Tool</h3>
				<p>
					I was asked to create this tool for a law firm, that would allow them to keep track of invoices, clients, staff, and manage work. For privacy and legal reasons, they requested no names be shown in the app. I was also only allowed to show 3 pages along with the side navigation bar
				</p>
				<Grid>
					<Panel src="/Industry0/LogIn.png">
						<h4>Log in Page</h4>
						<p>
							The Log In Page is where you enter your credential to log in to your account, and use the site
						</p>
					</Panel>

					<Panel src="/Industry0/HomePage.png">
						<h4>Home Page</h4>
						<p>
							In the Home Page, you can see notifications, reminders, as well as recent changes
						</p>
					</Panel>

					<Panel src="/Industry0/SideNav.png">
						<h4>Side Navigation Bar</h4>
						<p>
							All the pages are displayed and access from here
						</p>
					</Panel>

					<Panel src="/Industry0/WorkManagement.png">
						<h4>Work Management</h4>
						<p>
							Here is where progress is tracked for tasks
						</p>
					</Panel>
				</Grid>
		</Image>

		<Image title="Robo"
			   src="https://images.unsplash.com/photo-1629739884942-8678d138dd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			   id="robo">
				<h3>My Time At Robo</h3>
			   	<p>
					The past 2 years, I worked as an intern at <a href="https://robo.com.cy">Robo.com.cy</a>. A start up focusing on education and research through electrical engineering. 
					There I expanded my expertise, and furthered my understanding of electronics.
						My internship also gave me the opportunity to participate in some of the largest event in Cyprus. An opportunity that I latched on. Some of this events include:
						<br> <a href="https://reflectfest.com/">Reflect Fest. 2022</a><br>
						<a href="https://robotex.org.cy/">Robotex 2023</a><br>
						<a href="http://www.makerspace.onek.org.cy/makers-fair-2023">Makers Fair</a><br>
						ect <br>
				</p>
		</Image>

		<Image title="Qualifications"
			   src="https://images.unsplash.com/photo-1483678777699-a2340573e155?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			   id="qualifications">
			   	<!-- Astrotourism Project + teaching at stemfreak + whatever + teaching at UNIC -->
				<h3>My Time At StemFerak</h3>
				<p>
					I joined StemFreak in 2018, more than half a decade ago. Over the years, this organization has been instrumental in my personal and professional development. StemFreak equipped me with the tools to bring my ideas to life and, most importantly, taught me how to effectively express myself. Presenting my work pushed me out of my comfort zone, and I’ve come to embrace and enjoy that challenge. I’ve accomplished many milestones, and now I’m focused on achieving the highest honor here: becoming a STEM Ambassador. My goal is to inspire others to pursue their passions and follow a similar path.
				</p><br>

				<h3>Teaching At StemFreak</h3>
				<p>
					Two years ago, I began my journey as a teacher assistant during StemFreak’s Summer School course. This role provided me with the opportunity to learn how to teach and lead a team of students, gradually building my confidence and experience. In the 2023-2024 StemFreak semester, I was given the responsibility to create and lead my own C++ course, guiding a team of 11 students. Throughout the year, we tackled advanced and complex projects that demanded a deep mastery of the language.
				</p><br>

				<h3>Summer School</h3>
				<p>
					This year, during StemFreak’s Summer School course, I had the privilege of leading a group of 6-10 students. The curriculum was designed to provide a comprehensive introduction to various STEM fields. We delved into hands-on projects with Arduino, explored the intricacies of C++ programming, and engaged in 3D Design, among other topics. To complement the technical skills, we incorporated debates and pitch presentations. These activities were aimed at expanding the students’ critical thinking and reasoning abilities, encouraging them to articulate their ideas effectively and engage in constructive discussions. This holistic approach helped the students develop both their technical prowess and their ability to communicate and collaborate.
				</p><br>

				<h3>Astrotourism Project</h3>
				<p>
					The Astroturism is a project, funded by the Research and Innovation Foundation and funded by the EU and the Government of the Republic of Cyprus. It aims to utilize, Cyprus' clear skies, and ideal geography, inorder to promote and improve astroturism, in 36 months. There I volunteered on all occasions. I was able to help a team of very talented individuals teach about stars during the night, while I was also able to host various STEM activities during the day.
				</p>
		</Image>

		<Image title="What's Next?"
			   src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			   id="future">
				<h3>What I Hope to Achieve</h3>
				<p>
					In the future I hope to start my own blog in order to document my life better. This blog would not only serve as a personal outlet for reflection but also as a way to connect with others who share similar interests. I would also like to take on more professional projects that challenge me and allow me to grow both personally and professionally. By expanding my skills and network through these projects, I aim to build a solid foundation that could eventually lead to starting my own start-up.
				</p><br>
				
				<h3>What I Hope to learn</h3>
				<p>			
					In the future I hope to start my own blog in order to document my life better. This blog would not only serve as a personal outlet for reflection but also as a way to connect with others who share similar interests. I would also like to take on more professional projects that challenge me and allow me to grow both personally and professionally. By expanding my skills and network through these projects, I aim to build a solid foundation that could eventually lead to starting my own start-up.
				</p><br>
				<ul style="font-size: 1.125rem;">
					<span><Fa icon={faFlutter}/> Flutter</span><br>
					<span><Fa icon={faGolang}/> Go</span><br>
					<span><Fa icon={faX}/> Xamarin</span><br>
					<span><Fa icon={faServer}/> Apache Server</span><br>
					<span><Fa icon={faRadio}/> Redis</span><br>
					<span><Fa icon={faV}/> Vim</span><br>
				</ul>

		</Image>
	</ImageContainer>
</main>

<style>
	:global(#about) {
		filter: saturate(60%);
	}
</style>