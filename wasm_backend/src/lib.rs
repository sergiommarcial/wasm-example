use rand::seq::IteratorRandom;
#[allow(unused_imports)]
use wasm_bindgen::*;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Say {
    saying: String,
}

#[prelude::wasm_bindgen]
pub fn get_wise_saying() -> String {
    let str = include_str!("wisesayings.txt");
    let lines = str.lines();

    let says: Vec<Say> = lines
        .choose(&mut rand::thread_rng())
        .into_iter()
        .map(|line| Say {
            saying: line.to_string(),
        })
        .into_iter()
        .collect();

    return serde_json::to_string(&says).unwrap();
}
