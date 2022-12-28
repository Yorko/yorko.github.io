---
layout: article
title: "[EN/RU] What I learned about quantum computing"
image:
  teaser: 20221227-quantum-computing-overview/teaser.png
---
​
I would like to share what I learned about the world of quantum computing while helping Semyon Sinchenko & Co. with the development of the quantum machine learning [course](https://ods.ai/tracks/qmlcourse) (it’s originally created in Russian and is now being translated into English). Take it with a grain of salt - I’m not an expert in quantum computing, this post is rather built around a set of newbie’s revelations while diving into QC.

​*A version in Russian is found below.*

I'm a geek, I enjoy learning new, cool, and challenging stuff. QC is somewhere in between physics, mathematics, and computer science – it’s hard to grasp, exciting and thus perfectly satisfies my criteria of a domain to be studied by a nerd for fun. Although I did take a mind-boggling quantum physics course at MIPT some 10 years ago, it’s all weathered now, and I never made my way through [Preskill's lectures](http://theory.caltech.edu/~preskill/ph229/). Thus, saw an additional challenge in the whole complexity of the field, but still believed that I am able to understand the fundamentals in a matter of several months.

<div style="text-align:center"><img src="/images/20221227-quantum-computing-overview/max_plank_meme_eng.jpg" width=500px /></div>

Many authorities claim that QC will never be a life-changing technology, but other equally respected experts disagree. Damn it. In my opinion, quantum technology will take off but no one knows exactly when. You can imagine for a moment that QC now is akin to Deep Learning in 2010-2011. It is no longer very fashionable, and there are no successful practical applications, albeit theoretical views on what might work are abundant. But who would have predicted back then how Dl would explode in the coming years? Similarly, in 1903, just 2 months prior to the flight of the Wright brothers, the New York Times [predicted](https://bigthink.com/pessimists-archive/air-space-flight-impossible/) that the airplanes would be able to leave the ground and fly only in 10 million years. By the way, [Scott Aaronson](https://scottaaronson.blog/), one of the visible promoters of quantum computing, seems to ignore the practical aspect of quantum computing but is dealing with pure theory just because “this is so darn fucking insanely cool” (like that physicist from the meme about the need to hunt for gravitational waves).

<div style="text-align:center"><img src="/images/20221227-quantum-computing-overview/nyt_1903_prediction.png" width=700px /></div>
_Title of a NYT  1903 [article]((https://bigthink.com/pessimists-archive/air-space-flight-impossible/))._

As the old would recognize, back in the 70s and 80s many people were talking about quantum computing taking off, but now it is being backed up by examples of real success. Thus, we see quite a few startups sprouting:

- some of them play with toys. In general, quantum computing may seem even simpler than Deep Learning - there, in fact, you only need to apply unitary operations to tensors, you don’t even need nonlinearities. Therefore, all sorts of "frameworks" appeared that essentially rotate tensors (think of NumPy + some writing skills to adapt to the QC domain + marketing). Investors (just like the general audience), naturally, find it very difficult to separate the wheat from the chaff. The same goes for research. For example, let’s take quantum GAN with only 4 qubits that is able to generate the same MNIST pictures as the classic GAN with 200 parameters - is there really a value here, or is this simply a toy game?
- some startups are frankly aiming at deceiving investors and making easy money
- others are engaged with devices. Perhaps Rigetti is the most famous competitor of IBM, Google, and Chinese universities. However, actually building quantum computers is extremely challenging, and it’s hard to say how much more investment such ventures will attract in the future

Nevertheless, quantum startups are emerging, there are entire venture capital funds specializing in quantum computing. Let’s overview some of the application domains.

To cut a long story short, the most promising application of quantum computing seems to be something related to… quantum physics. Namely, modeling of quantum systems and simulation of quantum mechanics. It boils down to solving the Schrödinger equation for complex systems (in classic physics, even the three-body system, can not be solved analytically, while numeric simulations are also powerless for any reasonable number of elementary particles seen in the real world). Here it is hard for me to elaborate further, as the knowledge of quantum chemistry is required, but as I understand it, with a real functioning quantum computer there will be rapid progress in problems like protein folding prediction and, ultimately, drug development. As well as with the development of new materials with the desired properties.

There is also optimization and all sorts of quantum algorithms for solving NP-complete problems. Well, maybe in the future the optimal route on Google Maps will be built with a quantum computer, but in general, this will not affect our lives as much as quantum modeling. The same is true for the infamous Shor's algorithm and RSA encryption breaking. That is simply hype, just like bitcoin mining on a quantum computer. Post-quantum cryptography, invulnerable to attacks utilizing Shor's algorithm, is already being explored with might and main. In addition, even if we agree that RSA128 can be broken, you can always just increase the key, and one will need many more high-quality qubits to break the key, and we don’t have that many. But Shor's algorithm is legendary; in fact, it gave birth to many discussions about QC changing the future.

<div style="text-align:center"><img src="/images/20221227-quantum-computing-overview/Salesman.png" width=400px /></div>
_Visualizing the solution of the salesman’s problem – the shortest route to get around 12 German cities – is a very important task of modern logistics (source – [an intro article](https://quantum-ods.github.io/qmlcourse/book/intro/en/intro.html) of the quantum machine learning course by ODS)._

At the same time, quantum computation is already useful now, in the NISQ era (noisy intermediate-scale quantum), when we have only a few non-perfect qubits. Finding eigenvalues and eigenvectors turns out to be a difficult task. There is a quantum analog - variational quantum eigensolver which can operate with non-ideal qubits. It turns out that finding the first eigenvector of the system’s Hamiltonian is a critical applied task, relevant to various physical processes such as quantum annealing, modeling of the electronic structure of a molecule, etc. A good overview is made by Semyon Sinchenko for the Quantum Machine Learning course. A physical system is described by a Hamiltonian (it is so huge for large systems that even loading it into classical memory is a problem), and its ground state (the eigenvalues and the Hamiltonian vector) describes the solution—that is, in fact, the physical configuration of the system. VQE does not need an abstract ideal quantum computer, several dozens of non-ideal qubits will do. That's specifically the task that DWave was designed for. And although the path is promising and some minor success is seen, as I understand it, there are still not enough qubits for real breakthrough case studies.

The tech difficulties currently lie in the fact that physics is expensive (e.g. all sorts of superconductivities requiring almost absolute zero), as well as the fundamental difficulty in that, on the one hand, qubits must be isolated from the world so as not to lose their state (decoherence, roughly like a battery lying around and coming into contact with air and losing its charge, only qubits lose their pure state much faster). On the other hand, qubits need to be able to be measured, which means they are still somehow required to interact with the environment. The problem is roughly of the same nature as being unable to measure the temperature of the environment without lowering it because of the thermometer that heats up. It's just really difficult at the quantum level.

<div style="text-align:center"><img src="/images/20221227-quantum-computing-overview/quantum_computer_ibm.jpg" width=400px /></div>
_A quantum computer by IBM._

Still, I do not rule out the possibility that someone invents a breakthrough technology that would take a different look at qubits and, say, make a substance in which every atom is a qubit (I'm just letting my imagination run wild). Then the computational possibilities will be essentially unlimited and the field of QC will attract trillions. But in the near future, such breakthroughs as machine learning or, moreover, the Internet, I think, are not expected.

PS. ["Quantum computing for the very curious"](https://quantum.country/qcvc)  is the best resource I found so far that aims at explaining QC in an intuitive way but also diving into math.

---

Расскажу немного про то, что я узнал о мире квантовых вычислений, пока помогал Семену Синченко & Co. с разработкой [курса](https://ods.ai/tracks/qmlcourse) по квантовому машинному обучению. На хабр, условно, я б с таким текстом не пошел – любой настоящий эксперт за что-нибудь зацепится и по пунктам и подпунктам объяснит мне в коментах, почему я чмо (сложнее даже не с настоящими экспертами, а с попугаями, нахватавшимися терминов и с уверенностью Galactica вываливающими на тебя что-то, что ты не можешь легко проверить). Но если вы ничего не знаете о мире квантовых вычислений, мой обзор что-то да расскажет. Читать все же надо, как говорится, with a grain of salt – лезть в дивный новый мир квантовых вычислений так же сложно, как в любую столь же сложную область, будь то микробиология или неврология. 

Немного предыстории. Безусловно, я гик. Мне в кайф узнавать что-то новое, крутое и сложное. А кванты – это и физика, и математика, и computer science. Причем, несмотря на то что у нас была зубодробительная квантовая физика на физтехе, надо все вспоминать, и через [лекции Прескилла](http://theory.caltech.edu/~preskill/ph229/) я так и не продрался. Ботать кванты я собирался не из карьерных соображений, а просто чтоб понять, насколько кванты действительно способны изменить мир и как оно вообще работает. 

<div style="text-align:center"><img src="/images/20221227-quantum-computing-overview/max_plank_meme.jpeg" width=500px /></div>

Очень многие критики говорят, что кванты никогда не выстрелят, слишком много ограничений как технических, так и фундаментальных. Тут сложно возразить, действительно пока квантовые вычисления не меняют мир, а надежды они подают уж лет 100 как. Впрочем, есть как авторитетные скептики, так и авторитетные сторонники – черт ногу сломит. На мой взгляд, кванты почти наверное выстрелят, вот только никто не знает, когда именно. Можно на минуту представить, что кванты сейчас – это как Deep Learning в 2010-2011 году. Уже не особо модно, приложений особо нет, хотя теории полным полно. Но кто бы знал, как оно все рванет уже в ближайшие годы. Так же точно New York Times в 1903 году, за 2 месяца до полета братьев Райт, [предсказывала](https://bigthink.com/pessimists-archive/air-space-flight-impossible/), что самолеты полетят только через 10 млн лет. К слову, [Скотт Ааронсон](https://scottaaronson.blog/), один из видимых популяризаторов квантовых вычислениях, вообще не рассматривает вопрос о практически полезных квантовых компьютерах, а занимается чисто теорией, поскольку "это же черт возьми бесконечно блять круто" (как тот физик из мема про то, зачем нам ловить гравитационные волны).

<div style="text-align:center"><img src="/images/20221227-quantum-computing-overview/nyt_1903_prediction.png" width=700px /></div>
_Заголовок [статьи]((https://bigthink.com/pessimists-archive/air-space-flight-impossible/)) NYT 1903 года._

Олды помнят, еще в 70-80-ые все говорили о квантовых вычислениях, но сейчас это еще подкрепляется реальными успехами. Поэтому немало стартапов, которые:

- играют в игрушки. В целом квантовые вычисления могут показаться даже проще, чем DL – там по сути надо только унитарные операции к тензорам применять, даже нет нелинейностей. Поэтому набежали всякие "фреймворки", по сути вращающие тензоры (numpy + напильник + маркетинг). Инвесторам (да и не только), конечно, сложно отделить зерна от плевел. То же касается и исследований. Пример: GAN с 4 кубитами, рисующий те же MNIST картинки, что классический с 200 параметрами – реально ли тут есть value, или это игра в игрушки?
- откровенно пытаются наябать инвесторов и ничего не достичь
- занимаются железом. Тут Rigetti, пожалуй, наиболее известный конкурент IBM, гугла и китайцев. Но тоже непонятно, выстрелит оно или нет

Тем не менее квантовые стартапы появляются, есть целые венчурные фонды, специализирующиеся на квантах. Вот классное популярное [видео](https://youtu.be/kcLjj_3jF9w) про то, как обстоят дела в квантовом венчуре. 

Вкратце, самое многообещающее приложение – это, собственно, кванты для квантов – моделирование квантовых систем и симуляция квантовой механики. Это про решение уравнения Шредингера для сложных систем (в классике даже задача трех тел не решается аналитически, а симуляции тоже бессильны для хоть какого-то разумного числа элементарных частиц). Тут мне сложно махать руками, т.к. надо разбираться и в квантмехе, и квантовой химии, но как я понимаю, с настоящим квантовым компом будет дикий прогресс в задачах типа предсказания сворачивания белка и, в конечном счете, разработки лекарств. А также в разработке новых материалов с нужными свойствами.

Есть еще оптимизация, всякие квантовые алгоритмы для решения NP-полных задач. Ну, может, в будущем оптимальный маршрут в Я.Картах и будет строиться на квантовом компе, но в целом это так не повлияет на нашу жизнь, как квантовое моделирование. То же про алгоритм Шора и взлом RSA. Просто шумиха (как и майнинг битка на квантовых компах). Уже вовсю исследуется постквантовая криптография, защищающая от взлома RSA. К тому же, допустим RSA128 можно будет поломать, но если просто увеличить ключ, понадобится много качественных кубитов для взлома, а столько еще нет. Но алгоритм Шора – легендарный, с него по сути и начались все эти разговоры про кванты и будущее.

<div style="text-align:center"><img src="/images/20221227-quantum-computing-overview/Salesman.png" width=400px /></div>
_Визуализация решения задачи коммивояжера – кратчайший путь, чтобы объехать 12 немецких городов – очень важная задача современной логистики (источник – [статья](https://quantum-ods.github.io/qmlcourse/book/intro/ru/intro.html) курса по квантовому машинному обучению)._

При этом кванты полезны уже сейчас, в NISQ эпоху (noisy intermediate-scale quantum), когда кубитов немного, и они неидеальны. Поиск собственных значений и векторов, оказывается, сложная задача. Есть квантовых аналог – variational quantum eigensolver, Вот он может работать с неидеальными кубитами. Оказывается, поиск первого собственного вектора гамильтониана системы – очень важная прикладная задача, актуальная для разных физических процессов типа… хотел бы я (как выпускник физтеха черт побери) легко не гугля привести кучу примеров, но сюда относится все задачи типа many-body systems такие как квантовый отжиг, моделирование электронной структуры молекулы и т.д. Хороший [обзорчик](https://quantum-ods.github.io/qmlcourse/book/intro1block/intro1.html) Семен Синченко сделал для нашего курса QML. Тут система описывается гамильтонинаном (он столь огромен для больших систем, что даже загрузить его в классическую память – проблема), а ее основное состояние (собственные значения и вектор гамильтонина) описывает решение – то есть по сути физическую конфигурацию системы. Для VQE не нужен абстрактный идеальный квантовый комп, достаточно кучи неидеальных кубитов. Вот конкретно под одну эту задачу заточен DWave. И вроде как все успешно, потенциал есть. Хотя, как я понимаю, пока еще недостаточно кубитов для каких-то реально прорывных case studies. 

Но я не исключаю возможности, что кто-то изобретет прорывную технологию, условно, взглянет как-то по-другому на кубиты и сделает вещество, в котором каждый атом – кубит (фантазирую), и тогда вычислительные возможности будут по сути не ограничены. 

<div style="text-align:center"><img src="/images/20221227-quantum-computing-overview/quantum_computer_ibm.jpg" width=400px /></div>
_Квантовый компьютер IBM._

Сейчас сложности с тем, что физика – дорогая (всякие сверхпроводимости, требующие почти абсолютного нуля), а также принципиальная сложность в том, что с одной стороны, кубиты должны быть изолированы от мира, чтоб не терять свое состояния (декогеренция, примерно как батарейка лежит, контактирует с воздухом и теряет заряд, только кубиты намного быстрее теряют свое чистое состояние). С другой стороны, кубиты надо уметь измерять, то есть они все же обязаны как-то контактировать со средой. Проблема примерно той же природы, что нельзя измерить температуру среды, не понизив ее, т.к. градусник нагревается. Только на квантовом уровне это прям сложно. В-общем, как в 2012, вполне возможен прямо принципиальный прорыв, и тогда все ринутся в кванты. Но в ближайшее время таких прорывов, как машинное обучение или тем более Интернет, думаю, не ожидается. 

Ссылки на некоторые материалы для простых людей (тут без параллельных вселенных и прочих заумных слов): 


- ["Quantum computing for the very curious"](https://quantum.country/qcvc) лучший из ресурсов из тех, что я нашел, для описанной цели: разобраться, о чем вообще эти квантовые вычисления.
- Обзорная [статья](https://quantum-ods.github.io/qmlcourse/book/intro/ru/intro.html)
 про квантовые вычисления "О квантовых компьютерах, биткоине и превосходстве" в курсе квантового машинного обучения от ODS 
 - [статья](https://vas3k.ru/blog/quantum_computing/) Вастрика про квантовый компьютер 



