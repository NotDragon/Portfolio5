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
			   src="https://images.unsplash.com/photo-1641903202531-bfa6bf0c6419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
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
			   src="https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
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
					<Panel onclick={() => { goto('/AI') }}>
						<h4>AI</h4>
						<p>
							In 2020 AI gained massive popularity and became one of the biggest and most impactful things of this century. It revolutionized many industries and flipped the table upside down. While not a new concept at the time, it’s boom in popularity and clout meant that every company scrambled to introduce their own AI. I created a survey that aims to give me an insight to peoples view on this new tool. I also participated in a debate where 2 side argued over its place and role. One side aiming to limit its usage, while the other encouraged its implementation in more industries
						</p>
					</Panel>

					<Panel onclick={() => { goto('/5G') }}>
						<h4>5G</h4>
						<p>
							When 5G first released, many concerns were raised concerning its safety. Me along with a team of other students at StemFreak conducted a large-scale survey on people’s opinion on 5G
						</p>
					</Panel>

					<Panel onclick={() => { goto('/Climate') }}>
						<h4>Climate</h4>
						<p>
							Climate change is one of the most pressing issues in our society. It is a constantly looming threat that, if ignored, has the potential to reverse thousands of years’ worth of progress. I have spent a big portion of the last few years researching climate change, and its effects long term. That being said, climate change can have smaller effects on the world, that can be unnoticeable, and often fly under the radar. One such example is the effect on plants that require specific climate conditions to be prosperous. The coco-tree is one of those plants, which is why I decided to study it on its own. 
						</p>
					</Panel>

					<Panel onclick={() => { goto('/Genetics') }}>
						<h4>Genetics</h4>
						<p>
							By far, one of the least understood parts of the human body is DNA. This is the reason that so much misinformation is spread around the internet. I conducted extensive research into DNA, and genetics to understand them. I also created a survey that aims to see, which misconceptions about genetics are widely believed as true
						</p>
					</Panel>

					<Panel onclick={() => { goto('/Cars') }}>
						<h4>Green Cars and Sustainability</h4>
						<p>
							As the shift towards sustainability accelerates, green cars have gained considerable attention as a key solution to reducing carbon emissions. To explore public perception of these eco-friendly vehicles, I, along with a group of peers at StemFreak, conducted an extensive survey on the adoption of green cars.
						</p>
					</Panel>

					<Panel onclick={() => { goto('/Debates') }}>
						<h4>Debates</h4>
						<p>
							One of my favourite things to do is debate on a topic. Debating is certainly a skill that is very hard to master. It requires a combination of well-structured arguments, as well as being ready for what your opponent might through at you and being able to counter it. There is something thrilling about catching your opponent off guard by troughing a curve ball at them or cornering them by using their own arguments
						</p>
					</Panel>

					<Panel onclick={() => { window.location = 'https://drive.google.com/drive/folders/1D6DCljTg-ZKKD7OlI2VyN4SL4jLt71WX?usp=sharing' }}>
						<h4>More Presentation</h4>
						<p>I have created hundreds of presentations. I have compiled a few in a folder for you to read, if you are interested (Some of these presentations are old, and do not meet the standard of my current work, but still cover interesting concepts)</p>
					</Panel>

				</Grid>
		</Image>

		<Image title="Programing"
			   src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
			   id="programing">
				<h3>Why I Love Programming</h3>
			   	<p>
					I have been programming for many years now. To me, a computer is an empty canvas, and programming is my brush. I can create things that I never thought were possible, and truly, the sky’s the limit. If you told me, when I got started, that I was going to be able to train AIs to make play games and talk like humans, I would have laughed. Over the past years I have mastered C++ which allows me to create, fast and complicated programs, for anything I can think of. I have also learned languages like C# to be able to use with Unity, or JavaScript for web development and many other. I have build countless programs, and here are some of my favourite 
				</p>

				<Grid>
					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/Inertia' }}>
						<h4>Inertia</h4>
						<p>
							Inertia is a programming language that aims to simply app development, by specialising in UI design. It is a huge project that is still a work in progress. Currently it is being built with C++ and OpenGL for graphics, and due to the projects scale, will not be available soon. That being said, I have made accessible an early prototype that works using JavaScript, HTML and CSS. You can experiment with it by making moderately complicated websites.
						</p>
					</Panel>
					
					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/Endure' }}>
						<h4>Endure</h4>
						<p>
							Endure is a game about a character going through an adventure, trying to find freedom. Without going into much detail, he leaves in a cave that has been the home of humanity for many years, yet he believes that there is more in life then just a cave. Endure is another big that require a lot more work to be completed. It is being build purely with C++ and no engine, only using Raylib. I have made a very early version available that includes the basics of my “engine”. It is able to load maps off JSON files making map creating easy, and has basic game mechanics as well as saving and loading. 
						</p>
					</Panel>
					
					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/MySolarSystem' }}>
						<h4>My Solar System</h4>
						<p>

						</p>
					</Panel>

					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/CDev1' }}>
						<h4>CDev</h4>
						<p>

						</p>
					</Panel>

					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/CScript' }}>
						<h4>CScript</h4>
						<p>

						</p>
					</Panel>

					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/FurEliseCpp' }}>
						<h4>Fur Elise in C++</h4>
						<p>

						</p>
					</Panel>

					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/Pong' }}>
						<h4>Pong</h4>
						<p>

						</p>
					</Panel>

					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/2sumchallenge' }}>
						<h4>2 Sum Challenge</h4>
						<p>

						</p>
					</Panel>

					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/Passsound' }}>
						<h4>Passound</h4>
						<p>

						</p>
					</Panel>

					<Panel onclick={() => { window.location = 'https://github.com/NotDragon/Editor' }}>
						<h4>Editor</h4>
						<p>

						</p>
					</Panel>

				</Grid>
		</Image>

		<Image title="IoT and Engineering"
			   src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
			   id="iot">
			<p>
				
			</p>
		</Image>

		<Image title="Robo"
			   src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
			   src="https://images.unsplash.com/photo-1644030692728-6acd106c2d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
			   id="qualifications">
			   	<!-- Astrotourism Project + teaching at stemfreak + whatever + teaching at UNIC -->
				<h3>My Time At StemFerak</h3>
				<p>
					I joined StemFreak more then half a decade ago, in 2018. Over that time I have learned and developed as a person. StemFreak is the place that gave me the tools to create the things that I have created. In my opinion the best thing that I have learned at StemFreak is how to express my self. By having to present my work, I was pushed out of my comfort zone, which is something that I now love to do. I have achieved many things, and now I’m trying to complete this circle, by achieving the highest and most prestigious certification offed here, by become a STEM Ambassador, and go one to inspire others to do the same 
				</p><br>

				<h3>Teaching At StemFreak</h3>
				<p>
					2 years ago, I became a teacher assistant during StemFreak’s Summer School course. There I had the opportunity to learn how to teach and lead a team of students. Slowly I became more confident and experienced. In the 2023-2024 StemFreak semester, I was entrusted to create my own C++ course, where I taught a team of 11 students. Through the year we created advanced and complicated projects, that required mastery of the language
				</p><br>

				<h3>Summer School</h3>
				<p>
					This year during StemFreak’s Summer School course, I was assigned a group of 6-10 students. During the summer we learned about STEM, Arduino, C++, 3D Designing and more. We also had various debates and pitches in order to expand their reasoning skills 
				</p><br>

				<h3>Astrotourism Project</h3>
				<p>
					The Astroturism is a project, funded by the Research and Innovation Foundation and funded by the EU and the Government of the Republic of Cyprus. It aims to utilize, Cyprus' clear skies, and ideal geography, inorder to promote and improve astroturism, in 36 months. There I volunteered on all occasions. I was able to help a team of very talented individuals teach about stars during the night, while I was also able to host various STEM activities during the day.
				</p>
		</Image>

		<Image title="What's Next?"
			   src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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