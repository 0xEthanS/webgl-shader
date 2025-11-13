

import { CreateFragmentShader } from "@/components/WebGLShader/shaders/types";




import final from "@/components/WebGLShader/shaders/fragment/final";
import x_lerp from "@/components/WebGLShader/shaders/fragment/x_lerp";
import x_sine_lerp from "@/components/WebGLShader/shaders/fragment/x_sine_lerp";
import x_sine_lerp_time from "@/components/WebGLShader/shaders/fragment/x_sine_lerp_time";
import single_color from "@/components/WebGLShader/shaders/fragment/single_color";
import linear_gradient from "@/components/WebGLShader/shaders/fragment/linear_gradient";
import linear_gradient_area_under_line from "@/components/WebGLShader/shaders/fragment/linear_gradient_area_under_line";
import linear_gradient_area_under_slanted_line from "@/components/WebGLShader/shaders/fragment/linear_gradient_area_under_slanted_line";
import linear_gradient_area_under_exponential from "@/components/WebGLShader/shaders/fragment/linear_gradient_area_under_exponential";
import linear_gradient_area_under_wave from "@/components/WebGLShader/shaders/fragment/linear_gradient_area_under_wave";
import wave_animated_0 from "@/components/WebGLShader/shaders/fragment/wave_animated_0";
import wave_animated_1 from "@/components/WebGLShader/shaders/fragment/wave_animated_1";
import wave_animated_blur_left_to_right from "@/components/WebGLShader/shaders/fragment/wave_animated_blur_left_to_right";
import wave_animated_blur_middle from "@/components/WebGLShader/shaders/fragment/wave_animated_blur_middle";
import wave_animated_blur_down_even from "@/components/WebGLShader/shaders/fragment/wave_animated_blur_down_even";
import sine_stack_final from "@/components/WebGLShader/shaders/fragment/sine_stack_final";
import sine_stack_decomposed from "@/components/WebGLShader/shaders/fragment/sine_stack_decomposed";
import sine_stack_composed from "@/components/WebGLShader/shaders/fragment/sine_stack_composed";
import sine_stack_0 from "@/components/WebGLShader/shaders/fragment/sine_stack_0";
import sine_stack_2 from "@/components/WebGLShader/shaders/fragment/sine_stack_2";
import sine_stack_3 from "@/components/WebGLShader/shaders/fragment/sine_stack_3";
import sine_stack_3_LSA from "@/components/WebGLShader/shaders/fragment/sine_stack_3_LSA";
import simplex_wave from "@/components/WebGLShader/shaders/fragment/simplex_wave";
import simplex_stack_final from "@/components/WebGLShader/shaders/fragment/simplex_stack_final";
import simplex_stack_0 from "@/components/WebGLShader/shaders/fragment/simplex_stack_0";
import simplex_stack_1 from "@/components/WebGLShader/shaders/fragment/simplex_stack_1";
import multiple_waves from "@/components/WebGLShader/shaders/fragment/multiple_waves";
import simplex_noise from "@/components/WebGLShader/shaders/fragment/simplex_noise";
import simplex_perlin_split from "@/components/WebGLShader/shaders/fragment/simplex_perlin_split";
import simplex_noise_stacked_0 from "@/components/WebGLShader/shaders/fragment/simplex_noise_stacked_0";
import simplex_noise_stacked_1 from "@/components/WebGLShader/shaders/fragment/simplex_noise_stacked_1";
import simplex_noise_stacked_2 from "@/components/WebGLShader/shaders/fragment/simplex_noise_stacked_2";
import simplex_noise_stacked_3 from "@/components/WebGLShader/shaders/fragment/simplex_noise_stacked_3";
import simplex_noise_stacked_4 from "@/components/WebGLShader/shaders/fragment/simplex_noise_stacked_4";
import three_point_gradient from "@/components/WebGLShader/shaders/fragment/three_point_gradient";
import rainbow from "@/components/WebGLShader/shaders/fragment/rainbow";
import read_texture from "@/components/WebGLShader/shaders/fragment/read_texture";
import read_texture_t from "@/components/WebGLShader/shaders/fragment/read_texture_t";
import multiple_waves_blur_0 from "@/components/WebGLShader/shaders/fragment/multiple_waves_blur_0";
import multiple_waves_blur_1 from "@/components/WebGLShader/shaders/fragment/multiple_waves_blur_1";
import multiple_waves_blur_2 from "@/components/WebGLShader/shaders/fragment/multiple_waves_blur_2";
import multiple_waves_blur_2_side_by_side from "@/components/WebGLShader/shaders/fragment/multiple_waves_blur_2_side_by_side";
import multiple_waves_blur_3 from "@/components/WebGLShader/shaders/fragment/multiple_waves_blur_3";
import multiple_waves_blur_4 from "@/components/WebGLShader/shaders/fragment/multiple_waves_blur_4";
import final_effect_0 from "@/components/WebGLShader/shaders/fragment/final_effect_0";
import final_effect_1 from "@/components/WebGLShader/shaders/fragment/final_effect_1";








export const fragmentShaderRegistry: Partial<Record<string, CreateFragmentShader>> = {
	final,
	x_lerp,
	x_sine_lerp,
	x_sine_lerp_time,
	single_color,
	linear_gradient,
	linear_gradient_area_under_line,
	linear_gradient_area_under_slanted_line,
	linear_gradient_area_under_exponential,
	linear_gradient_area_under_wave,
	wave_animated_0,
	wave_animated_1,
	wave_animated_blur_left_to_right,
	wave_animated_blur_middle,
	wave_animated_blur_down_even,
	sine_stack_final,
	sine_stack_decomposed,
	sine_stack_composed,
	sine_stack_0,
	sine_stack_2,
	sine_stack_3,
	sine_stack_3_LSA,
	simplex_wave,
	simplex_stack_final,
	simplex_stack_0,
	simplex_stack_1,
	multiple_waves,
	simplex_noise,
	simplex_perlin_split,
	simplex_noise_stacked_0,
	simplex_noise_stacked_1,
	simplex_noise_stacked_2,
	simplex_noise_stacked_3,
	simplex_noise_stacked_4,
	three_point_gradient,
	rainbow,
	read_texture,

	read_texture_t,
	multiple_waves_blur_0,
	multiple_waves_blur_1,
	multiple_waves_blur_2,
	multiple_waves_blur_2_side_by_side,
	multiple_waves_blur_3,
	multiple_waves_blur_4,
	final_effect_0,
	final_effect_1,
};











