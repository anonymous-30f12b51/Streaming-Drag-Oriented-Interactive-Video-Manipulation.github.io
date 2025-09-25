window.HELP_IMPROVE_VIDEOJS = false;

// More Works Dropdown Functionality
function toggleMoreWorks() {
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    } else {
        dropdown.classList.add('show');
        button.classList.add('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const container = document.querySelector('.more-works-container');
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');

    if (container && !container.contains(event.target)) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Close dropdown on escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const dropdown = document.getElementById('moreWorksDropdown');
        const button = document.querySelector('.more-works-btn');
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Copy BibTeX to clipboard
function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    const copyText = button.querySelector('.copy-text');

    if (bibtexElement) {
        navigator.clipboard.writeText(bibtexElement.textContent).then(function () {
            // Success feedback
            button.classList.add('copied');
            copyText.textContent = 'Cop';

            setTimeout(function () {
                button.classList.remove('copied');
                copyText.textContent = 'Copy';
            }, 2000);
        }).catch(function (err) {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = bibtexElement.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            button.classList.add('copied');
            copyText.textContent = 'Cop';
            setTimeout(function () {
                button.classList.remove('copied');
                copyText.textContent = 'Copy';
            }, 2000);
        });
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function () {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Video carousel autoplay when in view
function setupVideoCarouselAutoplay() {
    const carouselVideos = document.querySelectorAll('.results-carousel video');

    if (carouselVideos.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Video is in view, play it
                video.play().catch(e => {
                    // Autoplay failed, probably due to browser policy
                    console.log('Autoplay prevented:', e);
                });
            } else {
                // Video is out of view, pause it
                video.pause();
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the video is visible
    });

    carouselVideos.forEach(video => {
        observer.observe(video);
    });
}

$(document).ready(function () {
    // Check for click events on the navbar burger icon

    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    bulmaSlider.attach();

    // Setup video autoplay for carousel
    setupVideoCarouselAutoplay();

});

// Self-Forcing gallery: build rows [image, image, video] without repeating HTML manually
(() => {
    const self_forcing_rows = [
        {
            img1: {
                src: 'static/images/self-forcing/0037/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: 'Translation'
            },
            img2: {
                src: 'static/images/self-forcing/0037/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/self-forcing/37.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/self-forcing/0040/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: 'Translation'
            },
            img2: {
                src: 'static/images/self-forcing/0040/block_3_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/self-forcing/40.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/self-forcing/0056/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: 'Translation'
            },
            img2: {
                src: 'static/images/self-forcing/0056/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/self-forcing/56.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/self-forcing/0069/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '2D Rotation'
            },
            img2: {
                src: 'static/images/self-forcing/0069/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/self-forcing/69.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/self-forcing/0092/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '3D Rotation'
            },
            img2: {
                src: 'static/images/self-forcing/0092/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/self-forcing/92.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/self-forcing/0095/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '3D Rotation'
            },
            img2: {
                src: 'static/images/self-forcing/0095/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '3D Rotation'
            },
            video: {
                src: 'static/videos/self-forcing/95.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/self-forcing/0166/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: 'Deformation'
            },
            img2: {
                src: 'static/images/self-forcing/0166/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/self-forcing/166.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/self-forcing/0321/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: 'Translation'
            },
            img2: {
                src: 'static/images/self-forcing/0321/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '3D Rotation'
            },
            video: {
                src: 'static/videos/self-forcing/321.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/self-forcing/0322/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: 'Translation'
            },
            img2: {
                src: 'static/images/self-forcing/0322/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/self-forcing/322.mp4',
                caption: 'Animated Video'
            }
        }
    ];
    const causvid_rows = [
        {
            img1: {
                src: 'static/images/causvid/0016/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: 'Translation'
            },
            img2: {
                src: 'static/images/causvid/0016/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/causvid/16.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/causvid/0022/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: 'Translation'
            },
            img2: {
                src: 'static/images/causvid/0022/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/causvid/22.mp4',
                caption: 'Animated Video'
            }
        },
        {
            img1: {
                src: 'static/images/causvid/0024/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '2D Rotation'
            },
            img2: {
                src: 'static/images/causvid/0024/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: 'Translation'
            },
            video: {
                src: 'static/videos/causvid/24.mp4',
                caption: 'Animated Video'
            }
        }
    ];

    const imageCol = ({ src, alt, caption }) => `
    <div class="column is-one-third">
      <figure class="image">
        <img src="${src}" alt="${alt}" loading="lazy" style="width:100%;height:auto;border-radius:8px;">
      </figure>
      <p class="is-size-6 mt-2">${caption ?? ''}</p>
    </div>
  `;

    const videoCol = ({ src, caption }) => `
    <div class="column is-one-third">
      <video controls muted playsinline preload="metadata" style="width:100%;height:auto;border-radius:8px;">
        <source src="${src}" type="video/mp4">
      </video>
      <p class="is-size-6 mt-2">${caption ?? ''}</p>
    </div>
  `;

    function renderSelfForcingGallery(data) {
        const mount = document.getElementById('self-forcing-gallery');
        if (!mount) return;

        const html = data.map(row => `
      <div class="columns is-multiline">
        ${imageCol(row.img1)}
        ${imageCol(row.img2)}
        ${videoCol(row.video)}
      </div>
    `).join('\n');

        mount.innerHTML = html;
    }

    function renderCausVidGallery(data) {
        const mount = document.getElementById('causvid-gallery');
        if (!mount) return;

        const html = data.map(row => `
      <div class="columns is-multiline">
        ${imageCol(row.img1)}
        ${imageCol(row.img2)}
        ${videoCol(row.video)}
      </div>
    `).join('\n');

        mount.innerHTML = html;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => renderSelfForcingGallery(self_forcing_rows));
        document.addEventListener('DOMContentLoaded', () => renderCausVidGallery(causvid_rows));
    } else {
        renderSelfForcingGallery(self_forcing_rows);
        renderCausVidGallery(causvid_rows);
    }
})();
