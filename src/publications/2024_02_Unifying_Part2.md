---
title: "Unifying radiative transfer models in computer graphics and remote sensing, Part II: A differentiable, polarimetric forward model and validation"
authors: ["Katherine Salesin", "Kirk D. Knobelspiesse", "Jacek Chowdhary", "Peng-Wang Zhai", "Wojciech Jarosz"]
author_links: ["", "https://science.gsfc.nasa.gov/sed/bio/kirk.d.knobelspiesse", "https://www.giss.nasa.gov/staff/jchowdhary.html",
               "https://aoog.umbc.edu/people/professor-zhai/", "https://cs.dartmouth.edu/~wjarosz/"]
journal: "Journal of Quantitative Spectroscopy and Radiative Transfer"
date_fancy: "March 2024"
date: "2024-03"
teaser_image_sm: "/files/unifying-part2-2024/special-nee-02.jpg"
teaser_image_lg: "/files/unifying-part2-2024/special-nee-01.jpg"
paper_link: "/files/unifying-part2-2024/salesin24unifying2.pdf"
pub_link: "https://doi.org/10/mbhz"
code_link: "https://github.com/ksalesin/mitsuba3-nasa"
abstract: "The constellation of Earth-observing satellites continuously collects measurements of scattered radiance, which must be transformed into geophysical parameters in order to answer fundamental scientific questions about the Earth. Retrieval of these parameters requires highly flexible, accurate, and fast forward and inverse radiative transfer models. Existing forward models used by the remote sensing community are typically accurate and fast, but sacrifice flexibility by assuming the atmosphere or ocean is composed of plane-parallel layers. Monte Carlo forward models can handle more complex scenarios such as 3D spatial heterogeneity, but are relatively slower. We propose looking to the computer graphics community for inspiration to improve the statistical efficiency of Monte Carlo forward models and explore new approaches to inverse models for remote sensing. In Part 2 of this work, we demonstrate that Monte Carlo forward models in computer graphics are capable of sufficient accuracy for remote sensing by extending Mitsuba 3, a forward and inverse modeling framework recently developed in the computer graphics community, to simulate simple atmosphere-ocean systems and show that our framework is capable of achieving error on par with codes currently used by the remote sensing community on benchmark results."
---