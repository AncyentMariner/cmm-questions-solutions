def parse_text_file(file_name)
  file = File.open(file_name)
  text = file.read
  file.close

  text
end

def format_text(text_block)
  paragraphs = text_block.split("\n\n")

  paragraphs.each do |paragraph|
    all_words = paragraph.split

    all_words.each do |word|
      line = word += word
    end

  end

  # break text on word ebd at 80 (or fewer) characters

  # concat lines to build new paragraph

  # return all paragraphs
end

text_block = parse_text_file('word_wrap .txt')
format_text(text_block)
