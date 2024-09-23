$(document).ready(function () {
    $.getJSON('jsons/testimonials.json', function (data) {
        const testimonialContainer = $('#testimonials .carousel-inner');
        data.forEach(function (testimonial, index) {
            const testimonialDiv = $(`
                <div class="item carousel-item ${index === 0 ? 'active' : ''}">
                <div class="row d-flex flex-row align-items-center">
                  <div class="col-lg-3 mb-3">
                    <div class="img-box col-lg-12 col-md-6">
                      <img
                        style="
                          border: 1px solid black;
                          padding: 1rem;
                          transform: rotate(45deg);
                        "
                        src="${testimonial.avatarUrl}" alt="${testimonial.company}" />
                    </div>
                  </div>
                  <div class="col-lg-9">
                    <p class="mb-3">
                      <span class="overview">${testimonial.name} - ${testimonial.role} <strong>${testimonial.company}</strong></span>
                    </p>
                    <p class="">
                      <span class="project">${testimonial.projectPrefix} <strong>${testimonial.project}</strong></span>
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-lg-12 d-flex flex-column">
                    <p class="quote">“</p>
                    <p class="testimonial">
                      ${testimonial.quote}
                    </p>
                    <p class="quote text-right">”</p>
                  </div>
                </div>
              </div>
        `);
            testimonialContainer.append(testimonialDiv);
        });
    }).fail(function () {
        console.error('Error loading testimonial data');
    });
});

$(document).ready(function () {
    $.getJSON('jsons/timeline.json', function (data) {
        const timelineContainer = $('#timeline');
        data.forEach(function (timeline, index) {
            const timelineDiv = $(`
                <div class="timeline">
                    <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                        <span class="year">${timeline.year}</span>
                        </span>
                    </div>
                    </div>
                    <div class="timeline-content ${index % 2 === 0 ? 'right-in' : ''}">
                    <p class="title">${timeline.title}</p>
                    </div>
                </div>
        `);
            timelineContainer.append(timelineDiv);
        });

        // Timeline animation
        let timelineObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry, index) {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('right-in')) {
                        entry.target.classList.add('slide-in-left');
                    } else {
                        entry.target.classList.add('slide-in-right');
                    }
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.timeline-content').forEach(function (element) {
            timelineObserver.observe(element);
        });
        // End timeline animation
    }).fail(function () {
        console.error('Error loading timeline data');
    });
});