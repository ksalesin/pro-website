---
title: "Combining Point and Line Samples for Direct Illumination"
authors: ["Katherine Salesin", "Wojciech Jarosz"]
author_links: ["", "https://cs.dartmouth.edu/~wjarosz/"]
journal: "Computer Graphics Forum (Proceedings of EGSR), 38(4)"
date_fancy: "July 2019"
date: "2019-07"
teaser_image_sm: "/files/line-sampling-2019/teaser.jpg"
teaser_image_lg: "/files/line-sampling-2019/salesin19combining-teaser.jpg"
paper_link: "/files/line-sampling-2019/salesin19combining.pdf"
supp_link: "/files/line-sampling-2019/salesin19combining-supplemental.pdf"
slides_pdf_link: "/files/line-sampling-2019/salesin19combining-slides.pdf"
slides_key_link: "/files/line-sampling-2019/salesin19combining-slides.key"
video_link: "/files/line-sampling-2019/salesin19combining-slides.mp4"
pub_link: "http://dx.doi.org/10.1111/cgf.13779"
code_link: "https://github.com/ksalesin/point-line-mis"
abstract: "We develop a unified framework for combining point and line samples in direct lighting calculations. While line samples have proven beneficial in a variety of rendering contexts, their application in direct lighting has been limited due to a lack of formulas for evaluating advanced BRDFs along a line and performance tied to the orientation of occluders in the scene. We lift these limitations by elevating line samples to a shared higher-dimensional space with point samples. Our key insight is to separate the probability distribution functions of line samples and points that lie along a line sample. This simple conceptual change allows us to apply multiple importance sampling (MIS) between points and lines, and lines with each other, in order to leverage their respective strengths. We also show how to improve the convergence rate of the MIS combination in unoccluded regions in an unbiased way using a novel discontinuity-smoothing balance heuristic. We verify through a set of rendering experiments that our proposed MISing of points and lines, and lines with each other, reduces variance of the direct lighting estimate while supporting an increased range of BSDFs compared to analytic line integration."
---