const svg = `M12,101l33.2-1.8L57,70.7l-3.9-29.5l-6.5-25.3L41.5,3H18.9L7.6,10.1L2.1,43.5l2.1,32.1L12,101z M58.8,67.6
			l5.5,23.2l8.6,4.7l8.6-6l8.9-25.7l2.1-12.5L89.8,38l-3.4-21.9L83.8,4.9L71.5,2.5l-9.4,2.1l-6.8,14.6l0.8,25.3L58.8,67.6z
			 M93.6,43.5l6.5,17.5l2.6,3.9h2.9l6.5-6.5l3.9-11.2l5.2-9.3l0.2-1.3l-1.6-8.8l-3.4-14.1l-2.6-8.6H98l-7.6,18.5l0.8,8.1L93.6,43.5z
			 M121.1,38.2l-1.5,8.9l-0.5,11.2l-4.7,5.2l1.3,11.5l4.2,20.6l4.2,23.2l2.9,9.9l6.5,8.9h5.2l9.8-0.5l6.8-6.8l11.5-40.8l4.2-17.5
			l-2.6-25.7L165.4,28l-6.8-15.4L152.9,3l-18.7,0.3l-10.7,19.3l-2.3,14.3l0.2,0.6L121.1,38.2z M170.8,54.3l3.4,8.9l8.1,6.8l5.5-0.8
			l6.8-13.6l3.9-16.7l0.5-17.5l4.2-6.8l-5.5-1.8l-9.4-5.5l-11.1-1.3l-11.1,10.2l1.8,14.9L170.8,54.3z M202.7,50l-3.4,8.1l2.6,12.5
			l4.2,27.4l5.5,11.2l2.9,6.8l6.8,0.8l7.6-0.5l8.6-16.7l4.7-36.9l2.1-7.8l-2.9-7.8L240,27.2l-3.9-9.4l-4.7-9.4l-8.6-6.8L212.7,7
			l-2.1,6.8l-5.5,6.5l-2.9,14.6L202.7,50z M164.8,113l-3.9,11.5l3.4,6.8l5.2,2.6l8.9,6.5h11.9l8.9-6.8l8.6-2.1l6-7.8l-3.9-10.7
			l-3.4-4.7L198,81.7l-5.5-8.6l-6.8-1.3l-7.6,4.2l-1.8,5.5l-5.5,4.2l1.3,9.9l-2.6,14.9L164.8,113z M98.3,154.3l5.2-1.8l11.5-24.8
			l3.4-9.9l0.8-15.9l-2.9-17.2l-2.6-10.7l-3.4-3.2l-11.9-3.9L90.2,72l-3.9,9.4l-3.9,8.9l-2.1,8.1l-0.5,13.3l3.4,8.9l2.1,11.5
			l2.9,5.5l2.3,5l3.8,7.3L98.3,154.3z M38.9,132.8l4,8.9l6.5,7.3l7.3,5.2l4.2,2.4l4.7-5.2l8.6-8.9l3.4-8.1l2.6-7.8l-3.4-5.5l1.3-9.9
			l-1.8-6.8l-8.9-7.6l-9.8-9.9L51,97.1l-4.2,5.2l-3.9,3.4l-2.1,11.5l2.1,8.6l-4,6L38.9,132.8z M38.9,132l-0.2-9.9l-2.6-5.5
			l-3.9-11.5l-12.4-2.6l-8.4,8.8l-5.2,11.5l-0.8,12l1.8,19.6l2.6,16.2l3.9,11.2l5.2,9.4l6,0.5l4.7-3.4l7.3-24.8l3.4-11.2l-1.1-11.9
			l-0.2-7.6l-0.2-0.5L38.9,132z M76.7,149.1l-4.2,12.8l-1.3,16.2L73,188l6.5,6l8.6,1.3l8.6-3.9l5.2-12.8l-1.3-12.5l0.5-10.7
			l-2.9-1.6l0,0l-4.2-4.2l-2.9-6.7l-6-5L76.7,149.1z M138.8,182.5L138,170l-2.6-15.9l-3.9-8.6l-10.7-7.8L109,150.5l-2.9,9.3
			l-2.6,20.1l-3.4,13.6l7.6,30l3.9,10.7l2.9,6.8l5.5,0.8l7.3-2.9l6.5-15.9l4.7-25.7L138.8,182.5z M146.4,141.8l-3.4,18l1.8,10.2
			l10.2,5.5l6,0.8l7.3-5.5l5.2-7.8l0.5-11.2l-3.9-11.5l-12.7-7.3L146.4,141.8z M209.5,181.5l-2.1-12.5l-1.3-12.3l-4.7-4.7l-4.2-7.3
			l-6.5-1.8l-8.1,4.7l-2.9,8.6l-4.2,6.5l0.5,8.1l-1.3,14.1l1.8,6.2l2.1,1.9l-0.8,2.8l3.4,9.6l5.5,13.6l5.2,0.8l3.9-1.8l3.4-4.7
			l7.3-25.7L209.5,181.5z M213.4,176.8l2.6,4.2l8.1,2.1l7.6-2.1l7.3-11.2l0.5-16.2l2.1-12.5l-3.9-6.5l-14.8-11.5L210,136.7
			l-1.3,10.7L210,165L213.4,176.8z M239.7,200.1l-6.8-8.1l-2.1-7.8h-10.2l-6.5,7.8l-3.4,7.3l-5.2,7.3l-2.1,9.4l-0.5,8.9l1.8,8.1
			l6.5,12.8l6.5,4.2l3.9,1.8l8.9-2.1l7.6-15.4l5.2-6l1.8-6.5v-13.6L239.7,200.1z M176.3,191.3l-9-8.3l-10.2-5.2l-11.9,3.4l1.3,6.8
			l-3.9,4.7l-4.2,10.2l0.8,3.4l-0.5,5.5l-2.9,8.1v8.9l3.4,6l6.8,7.3l6.5,4.2l6.5,3.4l6.5-4.2l6-8.9l3.9-6.8l6.8-5.5l-3.9-7.8
			l-2.6-12.5l2.3-8.3l-0.2-0.3L176.3,191.3z M49.7,233.8h5.2l4.2-2.1l4.7-8.6l4.7-18l1.3-20.1l-0.8-14.1l-6.8-12l-9.8-2.9l-11.1,6.8
			l-3.9,11.5L36,187.9l1.3,10.2l3.9,15.9l2.9,12.5l2.6,5.5L49.7,233.8z M3.7,229.1l0.8,11.5l0.8,6.5l8.9,8.6l9.4,0.5l10.7-2.9
			l7.6-11.2l-0.5-13.3l-1.8-12.5l-6-10.7l-2.1-8.1l-11.1-4.2L8.4,203.5l-5.2,14.6v11H3.7z M98.3,251.5l3.4-1.8l10.7-4.7l-2.9-11.5
			l-6.8-7.8l-1.3-12.5l-4.2-8.9l-13.2-8.1l-11.5,11.2l-4.2,8.6l0.5,8.1l-2.9,4.2l-6.8,7.8l-0.8,8.9l2.9,4.2l3.9,2.1l8.9,6.8l5.2,6
			l7.6,1.8l6-3.9L98.3,251.5z M126.9,248.4l0.8,8.1l2.9,2.6l6-1.8l4.7-2.1l-0.5-7.3l-0.8-9.4l-7.3-5.5l-5.2,7.3L126.9,248.4z
			 M165.6,275.5l1.3-6.2l-0.3-11.4l-6.5-5.5l-7.3-3.4l-13.6,11.5l0.5,17.5l2.1,11.2l2.9,6.5l5.2,2.9l6-0.8l7.6-8.6l3.4-9.3v-0.2
			L165.6,275.5z M204.8,247.6l-2.6-12l-4.2-9.9l-10.7-3.4l-11.5,9.9l-1.8,5.5l-2.6,6.5l-1.8,6l-1.8,12.5l-1.3,6.7v1.1l0.5,8.6
			l-0.3,1l1.6,5l2.6,10.2l0.8,6.5l4.7,6l2.1,7.3l4.2,6h5.2l8.6-12.8l4.2-10.2l3.9-14.9l2.6-9.4l-0.8-11.2L204.8,247.6z M218.4,356.1
			l6.5,1.8l9.8-6l2.1-15.4l2.6-13.6l1.8-12l2.9-8.1l-2.1-7.3l-1.8-16.7l-8.1-16.7l-8.6-6l-10.7,2.6v8.6l-5.5,11.2l-2.1,18.5
			l-0.8,4.7l-2.6,8.1l2.6,12.5l2.6,11.5l2.6,7.8l3.4,11.2L218.4,356.1z M168.2,374.1l4.2-14.6l4.7-9.9l2.1-8.9l0.5-6.8l-0.5-12.8
			l-3.4-8.6l-1.8-5.2l-4.7-6.5l-7.6-4.7l-10.2,7.8l-5.2,7.3l-2.9,6.8l-0.8,8.9l0.5,3.4l-0.5,9.9l0.8,6l1.8,9.9l1.8,8.1l3.9,4.7
			l6,8.9l2.4,1.3h4.2L168.2,374.1z M100.4,373.1l9.8,7.8l8.1-0.5l7.6-2.9l8.1-20.6l5.5-18.8l1.8-21.9l3.9-14.1l-5.2-14.1l-2.9-19.3
			l-6.8-4.7l-8.1-9.9l-7.3-4.7l-10.7,6.8l-2.6,6.5l-0.8,4.7l-4.7,2.6l-3.9,3.9l-0.5,4.2l-1.8,15.4l1.3,6.5l-2.9,6L88,316.1l2.1,7.8
			l2.1,19.3l1.8,8.9l1.8,10.2l3.4,4.2L100.4,373.1z M41.3,255.7l0.8,8.1l2.1,8.1l3.9,4.2l3.9-3.4l2.1-6.5l2.1-7.3l1.8-8.6l-2.6-9.4
			l-6.8-5.5l-5.2,4.7l-2.1,7.3C41.3,247.5,41.3,255.7,41.3,255.7z M9.7,335l3.9,8.9l3.9,10.2l8.9,3.4l5.5-5.2l5.5-13.6l3.4-13.3
			l-0.5-16.2l2.6-8.9l-0.5-3.4l-1.3-9.9l-1.8-10.2l-3.9-8.9l-4.7-6l-8.1-4.7l-9.4,4.2l-3.9,7.8l-2.9,12.8L6,290.5l-0.8,6l-1.8,14.1
			L9.7,335z M50.2,319.2l2.6,8.6l6.8,6.5h8.9l8.9-1.8l6-7.3l2.9-12l2.6-13.3l-1.3-9.9l-3.9-12.5l-4.7-5.5l-3.9-8.1l-3.9-5.2
			l-5.5-2.1l-5.2,6l-2.9,3.9l-1.8,2.9l-2.6,3.9l-5.5,8.6l-1.3,6l-0.5,7.8l-0.5,5.5l1.8,7.8L50.2,319.2z M46.8,366l5.2-0.8l5.2-8.6
			l2.1-8.1l-1.8-8.9l-2.9-2.9l-7.3-5.2l-7.6,9.4l-0.5,7.8l1.3,13.6L46.8,366z M56.2,393.3l5.5,8.9l8.1,6l10.2,2.9l4.2-5.2l7.3-12
			l7.3-5.5l-1.8-9.9l-5.2-4.2l-1.3-6.8l2.9-5.5l-2.9-8.1l-9.8-7.8l-2.6-7.3l-4.7-2.9l-6.8,7.8l-4.7,6.8l-3.4,4.2l-4.2,8.1l1.8,6
			l0.8,3.9l-4,4.9l-2.6,5.5l0.5,8.1L56.2,393.3z M130.3,423l-2.1-6.8l-2.9-18l-6-8.1l-10.7-8.1l0.5,0.5l-7.3,4.2l-0.8,4.7l-2.1,5.5
			l-7.6,6.5l-1.8,9.9l1.8,4.2l0.5,4.2v1.8l-1.3,2.9v3.9l-2.4,3.6v0.6l4.5,8.1v7.8l0.8,6l1.8,11.2l1.8,6.5l2.1,2.9l6,10.2h6.5
			l5.2-2.6l2.9-3.9l3.4-6.8l4.2-14.6l3.4-12.8l2.1-15.4L130.3,423z M135.4,419.1l8.6,3.4l8.9-4.7l3.9-6.5l4.7-11.5l-0.5-12.5
			l-1.8-5.2l-6-6.8l-2.9-4.7l-6.5-2.1l-8.6,5.2l-2.6,6.5l-1.8,5.2l-2.9,7.8l-0.5,5.5l2.6,10.7L135.4,419.1z M211.3,430.3l-2.1-9.9
			l-1.3-8.1l-4.2-14.6l-3.9-2.9l-4.2-10.2l-4.7-3.9l-8.6-0.8l-8.9,3.9l-2.1,6.5l-2.6,6l-3.4,6.8l-4.2,7.8l-4.2,2.9l-1.3,7.3
			l-1.3,7.8l-2.4,3.1l1.1,1.6l0.5,6.3l0.8,2.8l2.6,6l1.3,8.9l1.3,6.5l2.9,11.2l6.8,8.1l7.6,3.9l9.4,1.8l9.8-1.3l6.8-10.2l4.2-18
			l2.6-7.3l2.9-7.8l1-2.8L211.3,430.3z M182.2,372.3l3.4,3.4l5.2,3.9h6l6.8-6.8l3.9-2.6l4.2-3.4l-1.3-6.5l-1.8-7.3l1.3-7.8l-2.9-6.5
			l-1.3-5.2l-4.7-4.7l-7.6-4.2l-6,3.9l-1.3,3.4l-3.9,5.2l-2.1,2.9l-2.1,6.5l2.1,4.7l0.8,3.9l-1.3,1.3l-2.6,2.9l-1.8,7.3l2.1,4.2
			L182.2,372.3z M239.4,380.1l-4.2-7.3l-2.6-6.8l-3.7-6.8l-7.8-2.3l-5.6,3.8l-0.7,6.7l-7.5,7.4l-1.4,4.3l-0.5,5.1l0,5.8l-1.3,3.4
			l0.5,5.2l2.6,5.2l1.3,5.2l1.8,8.9l4.2,6l6,2.6l5.5,1.8l8.1-2.6l5.5-8.9v-9.9l2.1-4.2l2.9-5.5L241,392L239.4,380.1z M239.4,439.2
			l-4.2-4.7l-10.7-5.5l-9.4,5.5l-0.5,2.9l-1.3,3.7v0.2l-1,2.6l-0.8,2.1l1.3,7.8l-1.3,9.4l1.8,6.8l2.6,6.8l2.6,5.2l5.5,2.9l6.5-2.6
			l7.3-7.3l2.1-14.1l-0.5-11.5L239.4,439.2L239.4,439.2z M151.7,431.6l-2.7-3.9l-7.3-4.2l-6,2.9l-2.6,5.2l-1.8,17.2l-0.5,18l0.8,6.8
			l2.6,5.5l2.6,3.9l3.9,2.6l4.7-0.8l6-6l2.9-7.8l-0.5-20.1l-0.8-11.4l-2.1-7.1L151.7,431.6z M87.8,433.8l-0.6-6.2l-3.4-6l-6.8-6
			l-2.9-4.2l-6.5-2.1l-4.2,1.8l-2.9,5.2l-1.8,4.7l-5.5,3.4l-2.1,5.2v2.9l-1.3,6l-1.3,7.3l-1.3,8.9l2.9,11.2l2.9,8.1l0.8,5.2l8.6,2.9
			l6,3.4l10.2-0.5l4.2-8.1l3.4-8.1v-8.6l3.4-5.5l-1.3-13.3l-0.6-7l-0.2-0.3L87.8,433.8z M48.6,428.5l4.2-6.5l-0.5-9.9l-1.8-8.9
			l-1.3-10.7l-2.9-7.3l-1.3-5.5l-2.1-7.3l-5.5-6.5l-2.9-6L27,359l-10.7,5.2l-3.4,3.4l-0.8,7.8l-4.7,3.4l-1.8,3.9L3.6,390l1.3,6.8
			l-1.8,6.8v3.4l0.8,2.1l-2.1,4.7L1,422l2.9,14.1l1.3,8.6l0.8,8.6l0.8,14.6l5.5,5.5l2.6,5.5l2.1,3.9l5.5,4.7l10.2,2.9l3.9-6.8
			l8.1-18.8l1.3-16.2l1.3-12L48.6,428.5z`;

export default svg.replace(/\s+/mg, ' ').match(/(M.*?z)/g);
