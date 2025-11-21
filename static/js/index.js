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
            video_0: {
                src: 'static/videos/self-forcing/37/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing/0037/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing/37/block_2_Animation_4.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/self-forcing/0037/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/self-forcing/37/block_4_Animation_6.trajectory.mp4',
                caption: 'Animated Video: 45 - 68 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing/37.mp4',
                caption: 'Overall Video: 0 - 68 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/self-forcing/40/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing/0040/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing/40/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 32 frames'
            },
            img_2: {
                src: 'static/images/self-forcing/0040/block_3_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/self-forcing/40/block_3_Animation_4.trajectory.mp4',
                caption: 'Animated Video: 33 - 44 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing/40.mp4',
                caption: 'Overall Video: 0 - 44 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/self-forcing/56/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing/0056/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing/56/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/self-forcing/0056/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/self-forcing/56/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing/56.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/self-forcing/69/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing/0069/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: 2D Rotation]'
            },
            video_1: {
                src: 'static/videos/self-forcing/69/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/self-forcing/0069/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/self-forcing/69/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing/69.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/self-forcing/92/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing/0092/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: 3D Rotation]'
            },
            video_1: {
                src: 'static/videos/self-forcing/92/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/self-forcing/0092/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/self-forcing/92/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing/92.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/self-forcing/95/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing/0095/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: 3D Rotation]'
            },
            video_1: {
                src: 'static/videos/self-forcing/95/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/self-forcing/0095/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: 3D Rotation]'
            },
            video_2: {
                src: 'static/videos/self-forcing/95/block_4_Animation_6.trajectory.mp4',
                caption: 'Animated Video: 45 - 68 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing/95.mp4',
                caption: 'Overall Video: 0 - 68 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/self-forcing/166/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing/0166/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Deformation]'
            },
            video_1: {
                src: 'static/videos/self-forcing/166/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/self-forcing/0166/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/self-forcing/166/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing/166.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/self-forcing/321/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing/0321/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing/321/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/self-forcing/0321/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: 3D Rotation]'
            },
            video_2: {
                src: 'static/videos/self-forcing/321/block_4_Animation_6.trajectory.mp4',
                caption: 'Animated Video: 45 - 68 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing/321.mp4',
                caption: 'Overall Video: 0 - 68 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/self-forcing/322/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing/0322/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing/322/block_2_Animation_4.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/self-forcing/0322/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/self-forcing/322/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing/322.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        }
    ];
    const causvid_rows = [
        {
            video_0: {
                src: 'static/videos/causvid/16/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/causvid/0016/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/causvid/16/block_2_Animation_4.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/causvid/0016/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/causvid/16/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/causvid/16.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/causvid/22/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/causvid/0022/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/causvid/22/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/causvid/0022/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/causvid/22/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/causvid/22.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/causvid/23/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/causvid/0023/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/causvid/23/block_2_Animation_4.trajectory.mp4',
                caption: 'Animated Video: 21 - 56 frames'
            },
            img_2: {
                src: 'static/images/causvid/0023/block_5_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/causvid/23/block_5_Animation_7.trajectory.mp4',
                caption: 'Animated Video: 57 - 80 frames'
            },
            video_all: {
                src: 'static/videos/causvid/23.mp4',
                caption: 'Overall Video: 0 - 80 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/causvid/24/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/causvid/0024/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: 2D Rotation]'
            },
            video_1: {
                src: 'static/videos/causvid/24/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/causvid/0024/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: Translation]'
            },
            video_2: {
                src: 'static/videos/causvid/24/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/causvid/24.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/causvid/93/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/causvid/0093/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Deformation]'
            },
            video_1: {
                src: 'static/videos/causvid/93/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/causvid/0093/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: 3D Rotation]'
            },
            video_2: {
                src: 'static/videos/causvid/93/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/causvid/93.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        },
        {
            video_0: {
                src: 'static/videos/causvid/95/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/causvid/0095/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Deformation]'
            },
            video_1: {
                src: 'static/videos/causvid/95/block_2_Animation_3.trajectory.mp4',
                caption: 'Animated Video: 21 - 44 frames'
            },
            img_2: {
                src: 'static/images/causvid/0095/block_4_Animation.trajectory.2.png',
                alt: 'Result 2',
                caption: '[Animation: 3D Rotation]'
            },
            video_2: {
                src: 'static/videos/causvid/95/block_4_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 45 - 56 frames'
            },
            video_all: {
                src: 'static/videos/causvid/95.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            }
        }
    ];
    const self_forcing_long_rows = [
        {
            video_0: {
                src: 'static/videos/self-forcing-long/43-1/block_0_7.mp4',
                caption: 'Generated Video: 0 - 5 s'
            },
            img_1: {
                src: 'static/images/self-forcing-long/43-1/block_0_7.-1_frame.png',
                alt: 'Result 1',
                caption: 'Last frame of Generated Video (5 s)'
            },
            img_2: {
                src: 'static/images/self-forcing-long/43-1/block_7_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-long/43-1/block_7_Animation_9.trajectory.mp4',
                caption: 'Animated Video: 5 - 6 s'
            },
            video_2: {
                src: 'static/videos/self-forcing-long/43-1/block_9_14.mp4',
                caption: 'Subsequent Video: 6 - 10 s'
            },
            video_all: {
                src: 'static/videos/self-forcing-long/43-1/concat_43-1.mp4',
                caption: 'Overall Video: 0 - 10 s'
            },
            video_3: {
                src: 'static/videos/self-forcing-long/43-1/0043_ema.mp4',
                caption: 'Unmanipulated Video: 0 - 10 s'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-long/43-2/block_0_14.mp4',
                caption: 'Generated Video: 0 - 10 s'
            },
            img_1: {
                src: 'static/images/self-forcing-long/43-2/block_0_14.-1_frame.png',
                alt: 'Result 1',
                caption: 'Last frame of Generated Video (10 s)'
            },
            img_2: {
                src: 'static/images/self-forcing-long/43-2/block_14_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-long/43-2/block_14_Animation_16.trajectory.mp4',
                caption: 'Animated Video: 10 - 11 s'
            },
            video_2: {
                src: 'static/videos/self-forcing-long/43-2/block_16_19.mp4',
                caption: 'Subsequent Video: 11 - 14 s'
            },
            video_all: {
                src: 'static/videos/self-forcing-long/43-2/concat_43-2.mp4',
                caption: 'Overall Video: 0 - 14 s'
            },
            video_3: {
                src: 'static/videos/self-forcing-long/43-2/0043_ema.mp4',
                caption: 'Unmanipulated Video: 0 - 14 s'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-long/92-1/block_0_13.mp4',
                caption: 'Generated Video: 0 - 9 s'
            },
            img_1: {
                src: 'static/images/self-forcing-long/92-1/block_0_13.-1_frame.png',
                alt: 'Result 1',
                caption: 'Last frame of Generated Video (9 s)'
            },
            img_2: {
                src: 'static/images/self-forcing-long/92-1/block_13_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: 3D Rotation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-long/92-1/block_13_Animation_16.trajectory.mp4',
                caption: 'Animated Video: 9 - 11 s'
            },
            video_2: {
                src: 'static/videos/self-forcing-long/92-1/block_16_28.mp4',
                caption: 'Subsequent Video: 11 - 20 s'
            },
            video_all: {
                src: 'static/videos/self-forcing-long/92-1/concat_92-1.mp4',
                caption: 'Overall Video: 0 - 20 s'
            },
            video_3: {
                src: 'static/videos/self-forcing-long/92-1/0092_ema.mp4',
                caption: 'Unmanipulated Video: 0 - 20 s'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-long/92-2/block_0_27.mp4',
                caption: 'Generated Video: 0 - 20 s'
            },
            img_1: {
                src: 'static/images/self-forcing-long/92-2/block_0_27.-1_frame.png',
                alt: 'Result 1',
                caption: 'Last frame of Generated Video (20 s)'
            },
            img_2: {
                src: 'static/images/self-forcing-long/92-2/block_27_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: 3D Rotation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-long/92-2/block_27_Animation_29.trajectory.mp4',
                caption: 'Animated Video: 20 - 21 s'
            },
            video_2: {
                src: 'static/videos/self-forcing-long/92-2/block_29_32.mp4',
                caption: 'Subsequent Video: 21 - 23 s'
            },
            video_all: {
                src: 'static/videos/self-forcing-long/92-2/concat_92-2.mp4',
                caption: 'Overall Video: 0 - 23 s'
            },
            video_3: {
                src: 'static/videos/self-forcing-long/92-2/0092_ema.mp4',
                caption: 'Unmanipulated Video: 0 - 23 s'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-long/322-1/block_0_16.mp4',
                caption: 'Generated Video: 0 - 11 s'
            },
            img_1: {
                src: 'static/images/self-forcing-long/322-1/block_0_16.-1_frame.png',
                alt: 'Result 1',
                caption: 'Last frame of Generated Video (11 s)'
            },
            img_2: {
                src: 'static/images/self-forcing-long/322-1/block_16_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-long/322-1/block_16_Animation_18.trajectory.mp4',
                caption: 'Animated Video: 11 - 12 s'
            },
            video_2: {
                src: 'static/videos/self-forcing-long/322-1/block_18_32.mp4',
                caption: 'Subsequent Video: 12 - 23 s'
            },
            video_all: {
                src: 'static/videos/self-forcing-long/322-1/concat_322-1.mp4',
                caption: 'Overall Video: 0 - 23 s'
            },
            video_3: {
                src: 'static/videos/self-forcing-long/322-1/0322_ema.mp4',
                caption: 'Unmanipulated Video: 0 - 23 s'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-long/322-2/block_0_30.mp4',
                caption: 'Generated Video: 0 - 22 s'
            },
            img_1: {
                src: 'static/images/self-forcing-long/322-2/block_0_30.-1_frame.png',
                alt: 'Result 1',
                caption: 'Last frame of Generated Video (22 s)'
            },
            img_2: {
                src: 'static/images/self-forcing-long/322-2/block_30_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-long/322-2/block_30_Animation_32.trajectory.mp4',
                caption: 'Animated Video: 22 - 23 s'
            },
            video_2: {
                src: 'static/videos/self-forcing-long/322-2/block_32_35.mp4',
                caption: 'Subsequent Video: 23 - 26 s'
            },
            video_all: {
                src: 'static/videos/self-forcing-long/322-2/concat_322-2.mp4',
                caption: 'Overall Video: 0 - 26 s'
            },
            video_3: {
                src: 'static/videos/self-forcing-long/322-2/0322_ema.mp4',
                caption: 'Unmanipulated Video: 0 - 26 s'
            },
        },
    ];
    const self_forcing_occlusion_rows = [
        {
            video_0: {
                src: 'static/videos/self-forcing-occlusion/174/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-occlusion/174/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-occlusion/174/block_2_Animation_5.trajectory.mp4',
                caption: 'Animated Video: 20 - 56 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-occlusion/174/concat_174.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-occlusion/322/block_0_4_slow.mp4',
                caption: 'Generated Video: 0 - 44 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-occlusion/322/block_4_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-occlusion/322/block_4_Animation_7.trajectory.mp4',
                caption: 'Animated Video: 44 - 80 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-occlusion/322/concat_322.mp4',
                caption: 'Overall Video: 0 - 80 frames'
            },
        },
    ];
    const self_forcing_move_out_rows = [
        {
            video_0: {
                src: 'static/videos/self-forcing-move-out/174/block_2_Animation_4_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-move-out/174/block_4_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-move-out/174/block_4_Animation_7.trajectory.mp4',
                caption: 'Animated Video: 20 - 56 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-move-out/174/concat_174.mp4',
                caption: 'Overall Video: 0 - 56 frames'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-move-out/322/block_2_Animation_4_slow.mp4',
                caption: 'Generated Video: 0 - 44 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-move-out/322/block_4_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-move-out/322/block_4_Animation_7.trajectory.mp4',
                caption: 'Animated Video: 44 - 80 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-move-out/322/concat_322.mp4',
                caption: 'Overall Video: 0 - 80 frames'
            },
        },
    ];
    const self_forcing_previous_rows = [
        {
            video_0: {
                src: 'static/videos/self-forcing-previous/6/0006_ema.mp4',
                caption: 'a video containing 80 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-previous/6/block_2_Drag.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Editing: Translation] (10th frame)'
            },
            img_2: {
                src: 'static/images/self-forcing-previous/6/block_3_Drag.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Editing: Translation] (20th frame)'
            },
            img_3: {
                src: 'static/images/self-forcing-previous/6/block_6_Drag.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Editing: Translation] (50th frame)'
            },
            video_all: {
                src: 'static/videos/self-forcing-previous/6/block_0_6_7.mp4',
                caption: 'Edited Video: 0 - 80 frames'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-previous/23/0023_ema.mp4',
                caption: 'a video containing 80 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-previous/23/block_2_Drag.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Editing: Translation] (10th frame)'
            },
            img_2: {
                src: 'static/images/self-forcing-previous/23/block_3_Drag.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Editing: Translation] (20th frame)'
            },
            img_3: {
                src: 'static/images/self-forcing-previous/23/block_6_Drag.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Editing: Translation] (50th frame)'
            },
            video_all: {
                src: 'static/videos/self-forcing-previous/23/block_0_6_7.mp4',
                caption: 'Edited Video: 0 - 80 frames'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-previous/64/0064_ema.mp4',
                caption: 'a video containing 80 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-previous/64/block_3_Drag.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Editing: 2D Rotation] (10th frame)'
            },
            img_2: {
                src: 'static/images/self-forcing-previous/64/block_5_Drag.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Editing: 2D Rotation] (20th frame)'
            },
            img_3: {
                src: 'static/images/self-forcing-previous/64/block_6_Drag.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Editing: 2D Rotation] (50th frame)'
            },
            video_all: {
                src: 'static/videos/self-forcing-previous/64/block_0_6_7.mp4',
                caption: 'Edited Video: 0 - 80 frames'
            },
        },
    ];
    const wan_2_1_rows = [
        {
            img_1: {
                src: 'static/images/wan2.1/8/block_0_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: 2D Rotation]'
            },
            video_1: {
                src: 'static/videos/wan2.1/8/00008.trajectory.mp4',
                caption: 'Edited Video: 0 - 24 frames'
            },
        },
        {
            img_1: {
                src: 'static/images/wan2.1/40/block_0_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/wan2.1/40/00040.trajectory.mp4',
                caption: 'Edited Video: 0 - 24 frames'
            },
        },
        {
            img_1: {
                src: 'static/images/wan2.1/117/block_0_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/wan2.1/117/00117.trajectory.mp4',
                caption: 'Edited Video: 0 - 24 frames'
            },
        },
    ];
    const self_forcing_contradict_rows = [
        {
            text_0: '... <span style="color: blue;">gazing at the flame</span> ...',
            video_0: {
                src: 'static/videos/self-forcing-contradict/4-contradict/block_0_2_slow.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-contradict/4-contradict/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation] <br> move the gaze to the right'
            },
            video_1: {
                src: 'static/videos/self-forcing-contradict/4-contradict/block_2_Animation_4.trajectory_slow.mp4',
                caption: 'Animated Video: 20 - 44 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-contradict/4-contradict/block_0_2_4_slow.mp4',
                caption: 'Overall Video: 0 - 44 frames'
            },
        },
        {
            text_0: '... <span style="color: blue;">the vehicle stays tightly to the right side of the path</span> ...',
            video_0: {
                src: 'static/videos/self-forcing-contradict/17/block_0_2.mp4',
                caption: 'Generated Video: 0 - 22 s'
            },
            img_1: {
                src: 'static/images/self-forcing-contradict/17/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation] <br> move to the left'
            },
            video_1: {
                src: 'static/videos/self-forcing-contradict/17/block_2_Animation_4.trajectory.mp4',
                caption: 'Animated Video: 22 - 44 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-contradict/17/all.trajectory.mp4',
                caption: 'Overall Video: 0 - 44 frames'
            },
        },
        {
            text_0: '... <span style="color: blue;">his eyes are fixed on the left side of the scene</span> ...',
            video_0: {
                src: 'static/videos/self-forcing-contradict/29/block_0_2.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-contradict/29/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation] <br> move the sight to the right'
            },
            video_1: {
                src: 'static/videos/self-forcing-contradict/29/block_2_Animation_4.trajectory.mp4',
                caption: 'Animated Video: 20 - 44 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-contradict/29/all.trajectory.mp4',
                caption: 'Overall Video: 0 - 44 frames'
            },
        },
        {
            text_0: '... <span style="color: blue;">she is looking to the right side of the scene</span> ...',
            video_0: {
                src: 'static/videos/self-forcing-contradict/95/block_0_2.mp4',
                caption: 'Generated Video: 0 - 20 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-contradict/95/block_2_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation] <br> move the sight to the left'
            },
            video_1: {
                src: 'static/videos/self-forcing-contradict/95/block_2_Animation_4.trajectory.mp4',
                caption: 'Animated Video: 20 - 44 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-contradict/95/all.trajectory.mp4',
                caption: 'Overall Video: 0 - 44 frames'
            },
        },
    ];
    const self_forcing_failure_rows = [
        {
            video_0: {
                src: 'static/videos/self-forcing-failure/93/block_0_3_slow.mp4',
                caption: 'Generated Video: 0 - 32 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-failure/93/block_3_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Deformation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-failure/93/block_3_Animation_6.trajectory_slow.mp4',
                caption: 'Animated Video: 32 - 68 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-failure/93/concat_93_slow.mp4',
                caption: 'Overall Video: 0 - 68 frames'
            },
        },
        {
            video_0: {
                src: 'static/videos/self-forcing-failure/222/block_0_3_slow.mp4',
                caption: 'Generated Video: 0 - 32 frames'
            },
            img_1: {
                src: 'static/images/self-forcing-failure/222/block_3_Animation.trajectory.2.png',
                alt: 'Result 1',
                caption: '[Animation: Translation]'
            },
            video_1: {
                src: 'static/videos/self-forcing-failure/222/block_3_Animation_6.trajectory_slow.mp4',
                caption: 'Animated Video: 32 - 68 frames'
            },
            video_all: {
                src: 'static/videos/self-forcing-failure/222/concat_222_slow.mp4',
                caption: 'Overall Video: 0 - 68 frames'
            },
        },
    ];
    const self_forcing_distribution_drift_rows = [
        {
            video_0: {
                src: 'static/videos/self-forcing-distribution-drift/40-normalized/all.trajectory.mp4',
                caption: 'ADSR + Drag (Ours)'
            },
            video_1: {
                src: 'static/videos/self-forcing-distribution-drift/40-unnormalized/all.trajectory.mp4',
                caption: 'Drag'
            },
        },
    ];

//     const imageCol3 = ({ src, alt, caption }) => `
//     <div class="column is-one-third">
//       <figure class="image">
//         <img src="${src}" alt="${alt}" loading="lazy" style="width:100%;height:auto;border-radius:8px;">
//       </figure>
//       <p class="is-size-6 mt-2">${caption ?? ''}</p>
//     </div>
//   `;

//     const videoCol3 = ({ src, caption }) => `
//     <div class="column is-one-third">
//       <video controls muted playsinline preload="metadata" style="width:100%;height:auto;border-radius:8px;">
//         <source src="${src}" type="video/mp4">
//       </video>
//       <p class="is-size-6 mt-2">${caption ?? ''}</p>
//     </div>
//   `;


    // Helper: decide Bulma column class/style from total columns requested
    function getColumnSpec(total) {
    const t = Math.max(1, Math.min(12, parseInt(total, 10) || 1));

    // Prefer Bulma fraction helpers where common
    const fractionMap = {
        1: 'is-full',
        2: 'is-half',
        3: 'is-one-third',
        4: 'is-one-quarter',
        5: 'is-one-fifth',
        6: 'is-one-sixth',
    };

    if (fractionMap[t]) {
        return { classSuffix: fractionMap[t], inlineStyle: '' };
    }

    // If 12 is divisible by t, use numeric grid (is-1..is-12)
    if (12 % t === 0) {
        return { classSuffix: `is-${12 / t}`, inlineStyle: '' };
    }

    // Fallback: inline width for non-standard counts (e.g., 7, 8, 10, 11)
    return {
        classSuffix: '',
        inlineStyle: `flex:0 0 calc(100% / ${t});max-width:calc(100% / ${t});`,
    };
    }

    const imageCol = (total_column_number, item = {}, options = {}) => {
    if (!item || !item.src) return '';
    const { classSuffix, inlineStyle } = getColumnSpec(total_column_number);

    const { src, alt, caption } = item;
    const captionColor = options.captionColor ?? item.captionColor; // item-level override also supported
    const captionStyle = captionColor ? ` style="color:${captionColor}"` : '';

    return `
    <div class="column ${classSuffix}"${inlineStyle ? ` style="${inlineStyle}"` : ''}>
      <figure class="image">
        <img src="${src}" alt="${alt ?? ''}" loading="lazy" style="width:100%;height:auto;border-radius:8px;"
             onerror="this.onerror=null; this.closest('.column')?.remove();">
      </figure>
      <p class="is-size-6 mt-2"${captionStyle}>${caption ?? ''}</p>
    </div>
  `;
    };

    const videoCol = (total_column_number, item = {}, options = {}) => {
    if (!item || !item.src) return '';
    const { classSuffix, inlineStyle } = getColumnSpec(total_column_number);

    const { src, caption } = item;
    const captionColor = options.captionColor ?? item.captionColor; // item-level override also supported
    const captionStyle = captionColor ? ` style="color:${captionColor}"` : '';

    return `
    <div class="column ${classSuffix}"${inlineStyle ? ` style="${inlineStyle}"` : ''}>
      <video controls muted playsinline preload="metadata"
            style="display:block;width:100%;height:auto;border-radius:8px;"
            onerror="this.onerror=null; this.closest('.column')?.remove();">
        <source src="${src}" type="video/mp4">
      </video>
      <p class="is-size-6 mt-2"${captionStyle}>${caption ?? ''}</p>
    </div>
  `;
    };

    // Escape helper to avoid injecting unsafe HTML when using plain text
    function escapeHTML(str = '') {
        return str
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
    }

    // textCol: for arbitrary text/html blocks in the grid
    // item.html (trusted) bypasses escaping; item.text is escaped
    // Supports optional captionColor similar to imageCol/videoCol
    const textCol = (total_column_number, item = {}, options = {}) => {
        if (!item || (!item.text && !item.html)) return '';
        const { classSuffix, inlineStyle } = getColumnSpec(total_column_number);

        const captionColor = options.captionColor ?? item.captionColor;
        const captionStyle = captionColor ? ` style="color:${captionColor}"` : '';

        // Merge existing inline width spec (if any) with flex centering styles
        const baseStyle = inlineStyle ? inlineStyle : '';
        const flexCenter = 'display:flex;flex-direction:column;justify-content:center;align-items:center;';
        const combinedStyle = `${baseStyle}${flexCenter}`;

        const body = item.html ?? `<p${captionStyle} style="margin:0;text-align:center;">${escapeHTML(item.text)}</p>`;

        return `
        <div class="column ${classSuffix}" style="${combinedStyle}">
          <div class="content" style="width:100%;text-align:center;">
            ${body}
          </div>
        </div>
      `;
    };


    function renderHeaderRow(totalColumns, headerTexts = [], options = {}) {
        if (!Array.isArray(headerTexts) || headerTexts.length === 0) return '';
        // If headerTexts length != totalColumns, we still distribute by its own length
        const count = headerTexts.length;
        const columnsHtml = headerTexts.map(h =>
            textCol(count, { html: `<strong style="font-size:0.9rem;">${escapeHTML(h)}</strong>` }, options)
        ).join('');
        return `<div class="columns is-multiline gallery-header-row" style="margin-bottom:0.5rem;">${columnsHtml}</div>`;
    }


    function renderVideoGallery_7(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(7, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${videoCol(7, row.video_0)}
        ${imageCol(7, row.img_1)}
        ${imageCol(7, row.img_2, { captionColor: CAPTION_COLOR })}
        ${videoCol(7, row.video_1)}
        ${videoCol(7, row.video_2)}
        ${videoCol(7, row.video_all)}
        ${videoCol(7, row.video_3)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }

    function renderVideoGallery_6(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(6, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${videoCol(6, row.video_0)}
        ${imageCol(6, row.img_1, { captionColor: CAPTION_COLOR })}
        ${videoCol(6, row.video_1)}
        ${imageCol(6, row.img_2, { captionColor: CAPTION_COLOR })}
        ${videoCol(6, row.video_2)}
        ${videoCol(6, row.video_all)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }

    function renderVideoGallery_6_video_image_text(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(6, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${videoCol(6, row.video_0)}
        ${imageCol(6, row.img_1, { captionColor: CAPTION_COLOR })}
        ${imageCol(6, row.img_2, { captionColor: CAPTION_COLOR })}
        ${textCol(6, { html: "..." })}
        ${imageCol(6, row.img_3, { captionColor: CAPTION_COLOR })}
        ${videoCol(6, row.video_all)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }

    function renderVideoGallery_5(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(5, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${videoCol(5, row.video_0)}
        ${imageCol(5, row.img_1, { captionColor: CAPTION_COLOR })}
        ${videoCol(5, row.video_1)}
        ${videoCol(5, row.video_2)}
        ${videoCol(5, row.video_all)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }

    function renderVideoGallery_5_video_image_video(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(5, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${videoCol(5, row.video_0)}
        ${imageCol(5, row.img_1, { captionColor: CAPTION_COLOR })}
        ${imageCol(5, row.img_2, { captionColor: CAPTION_COLOR })}
        ${imageCol(5, row.img_3, { captionColor: CAPTION_COLOR })}
        ${videoCol(5, row.video_all)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }

    function renderVideoGallery_5_text(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(5, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${textCol(5, { html: row.text_0 })}
        ${videoCol(5, row.video_0)}
        ${imageCol(5, row.img_1, { captionColor: CAPTION_COLOR })}
        ${videoCol(5, row.video_1)}
        ${videoCol(5, row.video_all)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }

    function renderVideoGallery_4(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(4, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${videoCol(4, row.video_0)}
        ${imageCol(4, row.img_1, { captionColor: CAPTION_COLOR })}
        ${videoCol(4, row.video_1)}
        ${videoCol(4, row.video_all)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }

    function renderVideoGallery_3(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(3, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${videoCol(3, row.video_0)}
        ${imageCol(3, row.img_1, { captionColor: CAPTION_COLOR })}
        ${videoCol(3, row.video_1)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }


    function renderVideoGallery_2(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(2, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${imageCol(2, row.img_1, { captionColor: CAPTION_COLOR })}
        ${videoCol(2, row.video_1)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }


    function renderVideoGallery_2_video(data, galleryId, headers = []) {
        const mount = document.getElementById(galleryId);
        if (!mount) return;

        const CAPTION_COLOR = '#ff0000ff';
        const headerHtml = renderHeaderRow(2, headers);
        const html = data.map(row => `
      <div class="columns is-multiline">
        ${videoCol(2, row.video_0)}
        ${videoCol(2, row.video_1)}
      </div>
    `).join('\n');

        mount.innerHTML = headerHtml + html;
    }


    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_6(self_forcing_rows, 'self-forcing-gallery'));
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_6(causvid_rows, 'causvid-gallery'));
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_7(self_forcing_long_rows, 'self-forcing-long-gallery', ['Gen', 'Traj 1', 'Anim 1', 'Traj 2', 'Anim 2', 'Overall']));
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_4(self_forcing_occlusion_rows, 'self-forcing-occlusion-gallery'));
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_4(self_forcing_move_out_rows, 'self-forcing-move-out-gallery'));
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_6_video_image_text(self_forcing_previous_rows, 'self-forcing-previous-gallery',
            ['Completedly Generated Video', ' ', ' ', ' ', ' ', 'Edited Video'],
        ));
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_2(wan_2_1_rows, 'wan-2-1-gallery',
            ['Manipulation', 'Manipulated Video'],
        ));
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_5_text(self_forcing_contradict_rows, 'self-forcing-contradict-gallery'));
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_2_video(self_forcing_distribution_drift_rows, 'self-forcing-distribution-drift-gallery'));
        document.addEventListener('DOMContentLoaded', () => renderVideoGallery_4(self_forcing_failure_rows, 'self-forcing-failure-gallery'));
    } else {
        renderVideoGallery_6(self_forcing_rows, 'self-forcing-gallery');
        renderVideoGallery_6(causvid_rows, 'causvid-gallery');
        renderVideoGallery_7(self_forcing_long_rows, 'self-forcing-long-gallery',
            ['Generated Video', 'Last frame', 'Manipulation', 'Manipulated Video', 'Subsequent Generation', 'Overall Video Manipulated by Ours', 'Original Video Generated by Self-Forcing']);
        renderVideoGallery_4(self_forcing_occlusion_rows, 'self-forcing-occlusion-gallery');
        renderVideoGallery_4(self_forcing_move_out_rows, 'self-forcing-move-out-gallery');
        renderVideoGallery_6_video_image_text(self_forcing_previous_rows, 'self-forcing-previous-gallery',
            ['Completedly Generated Video', ' ', ' ', ' ', ' ', 'Edited Video'],
        );
        renderVideoGallery_2(wan_2_1_rows, 'wan-2-1-gallery',
            ['Manipulation', 'Manipulated Video']
        );
        renderVideoGallery_5_text(self_forcing_contradict_rows, 'self-forcing-contradict-gallery',
            ['Conflicted Text', 'Generated Video', 'Manipulation', 'Manipulated Video', 'Overall Video']
        );
        renderVideoGallery_2_video(self_forcing_distribution_drift_rows, 'self-forcing-distribution-drift-gallery');
        renderVideoGallery_4(self_forcing_failure_rows, 'self-forcing-failure-gallery');
    }
})();
